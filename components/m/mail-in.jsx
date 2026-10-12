import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7vjzfbgj.css';
import '../../css/e/el_tm5ger.css';
import '../../css/v/v2v23kwih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7vjzfbgj"/><path class="el_tm5ger"/><path class="v2v23kwih"/></g>`,
		"fallback": "andrsrxn:mail-in",
	});
}

export default Component;
