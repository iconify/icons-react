import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cd0yieu9l.css';
import '../../css/w/wdk9vnbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cd0yieu9l"/><path class="wdk9vnbti"/></g>`,
		"fallback": "hugeicons:keyframes-double",
	});
}

export default Component;
