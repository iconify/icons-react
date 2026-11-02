import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2fhr3bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2fhr3bce"/>`,
		"fallback": "mingcute:user-hide-fill",
	});
}

export default Component;
