import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2xs_abqk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2xs_abqk"/>`,
		"fallback": "garden:shopping-cart-fill-20",
	});
}

export default Component;
