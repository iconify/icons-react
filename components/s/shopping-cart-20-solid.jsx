import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5zcy4b-y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5zcy4b-y"/>`,
		"fallback": "heroicons:shopping-cart-20-solid",
	});
}

export default Component;
