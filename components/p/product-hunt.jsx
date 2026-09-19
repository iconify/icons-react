import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch3f4qbem.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch3f4qbem"/>`,
		"fallback": "fa6-brands:product-hunt",
	});
}

export default Component;
