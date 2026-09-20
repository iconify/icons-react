import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgjy_wb0h.css';
import '../../css/g/gprc9z00s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qgjy_wb0h"/><path clip-rule="evenodd" class="gprc9z00s"/></g>`,
		"fallback": "streamline-flex-color:mail-send-email-message-circle-flat",
	});
}

export default Component;
