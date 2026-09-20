import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sddatub1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sddatub1j"/>`,
		"fallback": "mingcute:shopping-cart-1-fill",
	});
}

export default Component;
