import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx27i8pya.css';
import '../../css/o/o784y1sot.css';
import '../../css/a/aj2f_mbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx27i8pya"/><path class="o784y1sot"/><path class="aj2f_mbud"/></g>`,
		"fallback": "andrsrxn:shield-check",
	});
}

export default Component;
