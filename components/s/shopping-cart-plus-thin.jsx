import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czdo3fb_j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czdo3fb_j"/>`,
		"fallback": "pullo:shopping-cart-plus-thin",
	});
}

export default Component;
