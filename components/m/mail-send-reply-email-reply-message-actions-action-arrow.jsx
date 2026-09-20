import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy_9vu8he.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy_9vu8he"/>`,
		"fallback": "streamline:mail-send-reply-email-reply-message-actions-action-arrow",
	});
}

export default Component;
