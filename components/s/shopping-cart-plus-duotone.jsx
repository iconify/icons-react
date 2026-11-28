import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u08pe7bcz.css';
import '../../css/j/j38dswy6b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u08pe7bcz"/><path class="j38dswy6b"/></g>`,
		"fallback": "pullo:shopping-cart-plus-duotone",
	});
}

export default Component;
