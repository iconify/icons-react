import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgeb-gxyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgeb-gxyl"/>`,
		"fallback": "hugeicons:shopping-cart-remove-01",
	});
}

export default Component;
