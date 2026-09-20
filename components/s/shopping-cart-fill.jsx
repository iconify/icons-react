import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e328_0bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e328_0bet"/>`,
		"fallback": "ri:shopping-cart-fill",
	});
}

export default Component;
