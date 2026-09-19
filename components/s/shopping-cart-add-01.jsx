import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjb570f_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjb570f_k"/>`,
		"fallback": "hugeicons:shopping-cart-add-01",
	});
}

export default Component;
