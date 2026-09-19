import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5-xnrwut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5-xnrwut"/>`,
		"fallback": "boxicons:message-bubble-captions-filled",
	});
}

export default Component;
