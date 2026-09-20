import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsai2gy0a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsai2gy0a"/>`,
		"fallback": "streamline:shopping-cart-basket-2-shopping-basket",
	});
}

export default Component;
