import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k271hvb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k271hvb6h"/>`,
		"fallback": "mingcute:message-circle-check-fill",
	});
}

export default Component;
