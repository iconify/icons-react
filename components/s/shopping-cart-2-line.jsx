import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfc4w3bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfc4w3bvk"/>`,
		"fallback": "mingcute:shopping-cart-2-line",
	});
}

export default Component;
