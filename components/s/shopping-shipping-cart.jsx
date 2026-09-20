import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3x4aha0j.css';
import '../../css/t/tjjdtrb6x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3x4aha0j"/><path class="tjjdtrb6x"/>`,
		"fallback": "streamline-pixel:shopping-shipping-cart",
	});
}

export default Component;
