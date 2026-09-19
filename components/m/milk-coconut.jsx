import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/ginlc2bcm.css';
import '../../css/h/hx0xb79kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ginlc2bcm"/><path class="hx0xb79kh"/></g>`,
		"fallback": "hugeicons:milk-coconut",
	});
}

export default Component;
