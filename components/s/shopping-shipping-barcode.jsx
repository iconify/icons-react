import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in_8m6pkn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in_8m6pkn"/>`,
		"fallback": "streamline-pixel:shopping-shipping-barcode",
	});
}

export default Component;
