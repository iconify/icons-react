import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn47a8a2v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cn47a8a2v"/>`,
		"fallback": "streamline:shopping-cart-add-solid",
	});
}

export default Component;
