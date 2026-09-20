import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y214rcc_b.css';
import '../../css/u/ujwnqxu2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y214rcc_b"/><path class="ujwnqxu2v"/></g>`,
		"fallback": "mage:volume-up",
	});
}

export default Component;
