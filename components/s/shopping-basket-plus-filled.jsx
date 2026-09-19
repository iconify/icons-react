import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx9a0_b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx9a0_b4i"/>`,
		"fallback": "griddy-icons:shopping-basket-plus-filled",
	});
}

export default Component;
