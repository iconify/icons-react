import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i8w9fnzek.css';
import '../../css/u/u38li23ly.css';
import '../../css/a/av3v-z7br.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i8w9fnzek"/><path class="u38li23ly"/><path class="av3v-z7br"/></g>`,
		"fallback": "streamline:mail-smiley-happy-mask-chat-message-smiley-smile-emoji-mask",
	});
}

export default Component;
