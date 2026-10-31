import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp_01h4ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp_01h4ee"/>`,
		"fallback": "coolicons:shopping-cart-fill-round",
	});
}

export default Component;
