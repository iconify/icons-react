import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wjlmgtb1b.css';
import '../../css/b/bulg8qnmj.css';
import '../../css/s/s-28vc1_s.css';
import '../../css/t/t5v0f6chl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="wjlmgtb1b"/><circle class="bulg8qnmj"/><circle class="s-28vc1_s"/><path class="t5v0f6chl"/></g>`,
		"fallback": "streamline:mail-chat-bubble-typing-square-messages-message-bubble-typing-square-chat",
	});
}

export default Component;
