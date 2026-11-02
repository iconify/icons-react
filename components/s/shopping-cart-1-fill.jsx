import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkq3vx3ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkq3vx3ve"/>`,
		"fallback": "mingcute:shopping-cart-1-fill",
	});
}

export default Component;
