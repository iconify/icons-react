import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbeg3bu9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbeg3bu9l"/>`,
		"fallback": "mingcute:message-square-dashed-line",
	});
}

export default Component;
