import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7s5u-sdt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7s5u-sdt"/>`,
		"fallback": "streamline:shopping-cart-3",
	});
}

export default Component;
