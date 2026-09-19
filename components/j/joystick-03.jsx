import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hdqsq0bfi.css';
import '../../css/r/rmrac4bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hdqsq0bfi"/><path class="rmrac4bds"/></g>`,
		"fallback": "hugeicons:joystick-03",
	});
}

export default Component;
