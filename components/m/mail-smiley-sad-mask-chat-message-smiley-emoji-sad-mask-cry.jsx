import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u38li23ly.css';
import '../../css/e/e70z4mr9o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u38li23ly"/><path class="e70z4mr9o"/></g>`,
		"fallback": "streamline:mail-smiley-sad-mask-chat-message-smiley-emoji-sad-mask-cry",
	});
}

export default Component;
