import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpc9mhzvh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fpc9mhzvh"/>`,
		"fallback": "streamline:shopping-cart-add-remix",
	});
}

export default Component;
