import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ovu9dzm8y.css';
import '../../css/z/zy5mcfmls.css';
import '../../css/y/ygi3hj8ab.css';
import '../../css/y/y_ezged7l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ovu9dzm8y"/><circle class="zy5mcfmls"/><circle class="ygi3hj8ab"/><path class="y_ezged7l"/></g>`,
		"fallback": "streamline:mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat",
	});
}

export default Component;
