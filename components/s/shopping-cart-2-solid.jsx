import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ykkif9j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l5ykkif9j"/>`,
		"fallback": "streamline-flex:shopping-cart-2-solid",
	});
}

export default Component;
