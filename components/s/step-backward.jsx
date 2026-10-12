import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_5c_zbqq.css';
import '../../css/a/ajae2sbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w_5c_zbqq"/><path class="ajae2sbag"/></g>`,
		"fallback": "andrsrxn:step-backward",
	});
}

export default Component;
