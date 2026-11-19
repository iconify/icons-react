import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0g7ffb8z.css';
import '../../css/o/o784y1sot.css';
import '../../css/a/a7r5q1bbk.css';
import '../../css/v/v74ybtbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p0g7ffb8z"/><path class="o784y1sot"/><path class="a7r5q1bbk"/><path class="v74ybtbkr"/></g>`,
		"fallback": "andrsrxn:shield-user",
	});
}

export default Component;
