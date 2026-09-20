import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q-ycozr2u.css';
import '../../css/h/h6m0x8ani.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q-ycozr2u"/><path class="h6m0x8ani"/></g>`,
		"fallback": "streamline:mail-smiley-sad-face-chat-message-smiley-emoji-sad-face-unsatisfied",
	});
}

export default Component;
