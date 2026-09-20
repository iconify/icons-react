import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt24h6bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt24h6bmw"/>`,
		"fallback": "mdi:shopping-cart-off",
	});
}

export default Component;
