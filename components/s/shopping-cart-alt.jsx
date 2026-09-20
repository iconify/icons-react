import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1q944bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1q944bgb"/>`,
		"fallback": "uil:shopping-cart-alt",
	});
}

export default Component;
