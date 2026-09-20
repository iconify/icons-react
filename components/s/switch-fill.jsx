import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix4knfb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix4knfb9v"/>`,
		"fallback": "mingcute:switch-fill",
	});
}

export default Component;
