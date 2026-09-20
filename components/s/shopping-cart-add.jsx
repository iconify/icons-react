import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/py8w3yd8v.css';
import '../../css/y/y8sd05b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="py8w3yd8v"/><path class="y8sd05b7k"/></g>`,
		"fallback": "streamline-sharp-color:shopping-cart-add",
	});
}

export default Component;
