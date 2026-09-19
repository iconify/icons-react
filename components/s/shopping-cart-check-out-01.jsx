import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxp457pzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxp457pzx"/>`,
		"fallback": "hugeicons:shopping-cart-check-out-01",
	});
}

export default Component;
