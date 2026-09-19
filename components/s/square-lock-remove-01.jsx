import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g96s-kbrj.css';
import '../../css/w/wr28_ubwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g96s-kbrj"/><path class="wr28_ubwm"/></g>`,
		"fallback": "hugeicons:square-lock-remove-01",
	});
}

export default Component;
