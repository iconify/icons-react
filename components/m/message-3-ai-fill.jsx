import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8ed6kb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8ed6kb7g"/>`,
		"fallback": "mingcute:message-3-ai-fill",
	});
}

export default Component;
