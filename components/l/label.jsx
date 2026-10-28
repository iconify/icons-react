import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wve8zmujj.css';
import '../../css/y/ydh-505xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wve8zmujj"/><path class="ydh-505xc"/></g>`,
		"fallback": "andrsrxn:label",
	});
}

export default Component;
