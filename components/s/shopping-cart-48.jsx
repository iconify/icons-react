import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj6w8j6-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj6w8j6-u"/>`,
		"fallback": "energy-icons:shopping-cart-48",
	});
}

export default Component;
