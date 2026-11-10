import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5y6mhbba.css';
import '../../css/r/r794rg73j.css';
import '../../css/d/dz4cvhdqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5y6mhbba"/><path class="r794rg73j"/><path class="dz4cvhdqo"/></g>`,
		"fallback": "andrsrxn:panel-right-open",
	});
}

export default Component;
