import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsclkac7x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsclkac7x"/>`,
		"fallback": "pullo:shopping-cart-plus-bold",
	});
}

export default Component;
