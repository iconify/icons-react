import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2pim1bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2pim1bhl"/>`,
		"fallback": "mingcute:message-square-reply-fill",
	});
}

export default Component;
