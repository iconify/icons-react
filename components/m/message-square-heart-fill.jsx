import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlh9jvftu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlh9jvftu"/>`,
		"fallback": "mingcute:message-square-heart-fill",
	});
}

export default Component;
