import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faxxu_v1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faxxu_v1r"/>`,
		"fallback": "energy-icons:shopping-cart-20-bold",
	});
}

export default Component;
