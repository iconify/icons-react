import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdj9-9bee.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdj9-9bee"/>`,
		"fallback": "streamline:shopping-store-signage-3-street-sandwich-shops-shop-stores-board-sign-store",
	});
}

export default Component;
