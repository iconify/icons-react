import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3d55nbfu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3d55nbfu"/>`,
		"fallback": "rivet-icons:shopping-cart-solid",
	});
}

export default Component;
