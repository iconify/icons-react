import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8ifwz8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8ifwz8q"/>`,
		"fallback": "mingcute:message-square-heart-line",
	});
}

export default Component;
