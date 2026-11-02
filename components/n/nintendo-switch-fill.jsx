import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/horck1bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="horck1bfi"/>`,
		"fallback": "mingcute:nintendo-switch-fill",
	});
}

export default Component;
