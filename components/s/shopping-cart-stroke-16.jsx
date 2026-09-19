import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y74afh5ul.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y74afh5ul"/>`,
		"fallback": "garden:shopping-cart-stroke-16",
	});
}

export default Component;
