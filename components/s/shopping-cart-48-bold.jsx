import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix_lw37hq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix_lw37hq"/>`,
		"fallback": "energy-icons:shopping-cart-48-bold",
	});
}

export default Component;
