import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d_j0kmb_r.css';
import '../../css/o/ov059fnuf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d_j0kmb_r"/><circle class="ov059fnuf"/></g>`,
		"fallback": "streamline:mail-chat-bubble-square-warning-bubble-square-messages-notification-chat-message-warning-alert",
	});
}

export default Component;
