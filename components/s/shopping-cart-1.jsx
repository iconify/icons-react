import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0tbg8bro.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0tbg8bro"/>`,
		"fallback": "streamline:shopping-cart-1",
	});
}

export default Component;
