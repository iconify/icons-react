import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5eo6hk6h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5eo6hk6h"/>`,
		"fallback": "streamline:shopping-cart-3-remix",
	});
}

export default Component;
