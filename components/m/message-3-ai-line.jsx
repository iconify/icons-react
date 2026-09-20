import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gecrqn4vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gecrqn4vy"/>`,
		"fallback": "mingcute:message-3-ai-line",
	});
}

export default Component;
