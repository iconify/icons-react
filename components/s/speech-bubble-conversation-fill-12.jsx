import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5gk22b5u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5gk22b5u"/>`,
		"fallback": "garden:speech-bubble-conversation-fill-12",
	});
}

export default Component;
