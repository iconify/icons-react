import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3huzywhg.css';
import '../../css/a/af8o1jbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3huzywhg"/><path class="af8o1jbnx"/>`,
		"fallback": "basil:shopping-cart-outline",
	});
}

export default Component;
