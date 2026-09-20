import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0e90mbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0e90mbmq"/>`,
		"fallback": "mingcute:shopping-cart-2-fill",
	});
}

export default Component;
