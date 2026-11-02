import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mydz6fg-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mydz6fg-d"/>`,
		"fallback": "mingcute:shopping-cart-2-fill",
	});
}

export default Component;
