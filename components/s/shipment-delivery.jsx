import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pia1jk4qr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pia1jk4qr"/>`,
		"fallback": "carbon:shipment-delivery",
	});
}

export default Component;
