import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz5960w0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zz5960w0v"/>`,
		"fallback": "streamline:shopping-cart-2-remix",
	});
}

export default Component;
