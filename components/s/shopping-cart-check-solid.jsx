import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umahpab1k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="umahpab1k"/>`,
		"fallback": "streamline:shopping-cart-check-solid",
	});
}

export default Component;
