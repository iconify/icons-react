import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2cri1bgx.css';
import '../../css/t/tp88bs8-f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2cri1bgx"/><path class="tp88bs8-f"/></g>`,
		"fallback": "streamline-color:mail-send-email-message",
	});
}

export default Component;
