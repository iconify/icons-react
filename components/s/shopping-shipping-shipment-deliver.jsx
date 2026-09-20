import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5tt7bcjs.css';
import '../../css/v/vxt0-sbfh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5tt7bcjs"/><path class="vxt0-sbfh"/>`,
		"fallback": "streamline-pixel:shopping-shipping-shipment-deliver",
	});
}

export default Component;
