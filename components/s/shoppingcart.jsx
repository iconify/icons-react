import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vne-oq9_q.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vne-oq9_q"/>`,
		"fallback": "wpf:shoppingcart",
	});
}

export default Component;
