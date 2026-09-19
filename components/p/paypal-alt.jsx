import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuzo8w5dz.css';

const viewBox = {"width":360,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuzo8w5dz"/>`,
		"fallback": "zmdi:paypal-alt",
	});
}

export default Component;
