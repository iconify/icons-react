import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gqr9qtmhp.css';
import '../../css/h/h1avr8zij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gqr9qtmhp"/><path class="h1avr8zij"/></g>`,
		"fallback": "humbleicons:switch-off",
	});
}

export default Component;
