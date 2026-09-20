import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a28b4nb2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a28b4nb2w"/>`,
		"fallback": "streamline:mail-chat-bubble-square-messages-message-bubble-chat-square",
	});
}

export default Component;
