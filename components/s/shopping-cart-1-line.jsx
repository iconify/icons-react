import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx118f5my.css';
import '../../css/b/btb61zlai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx118f5my"/><path class="btb61zlai"/>`,
		"fallback": "mingcute:shopping-cart-1-line",
	});
}

export default Component;
