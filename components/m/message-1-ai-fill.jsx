import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4sz79b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4sz79b1q"/>`,
		"fallback": "mingcute:message-1-ai-fill",
	});
}

export default Component;
