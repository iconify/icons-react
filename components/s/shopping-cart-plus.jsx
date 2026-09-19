import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht-g1lbxx.css';

const viewBox = {"width":432,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht-g1lbxx"/>`,
		"fallback": "zmdi:shopping-cart-plus",
	});
}

export default Component;
