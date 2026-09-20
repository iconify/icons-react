import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbsw-ac5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbsw-ac5o"/>`,
		"fallback": "mage:shopping-cart-fill",
	});
}

export default Component;
