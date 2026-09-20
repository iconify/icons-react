import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv4u5ht1n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv4u5ht1n"/>`,
		"fallback": "streamline:travel-wayfinder-ladder-business-product-metaphor-ladder",
	});
}

export default Component;
