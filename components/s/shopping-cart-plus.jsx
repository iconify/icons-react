import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo-0vnbea.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo-0vnbea"/>`,
		"fallback": "pullo:shopping-cart-plus",
	});
}

export default Component;
