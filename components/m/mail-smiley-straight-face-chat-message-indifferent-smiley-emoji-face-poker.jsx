import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mids85b8n.css';
import '../../css/a/as-8emb6g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mids85b8n"/><path class="as-8emb6g"/></g>`,
		"fallback": "streamline:mail-smiley-straight-face-chat-message-indifferent-smiley-emoji-face-poker",
	});
}

export default Component;
