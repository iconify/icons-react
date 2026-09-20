import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqiw94bsr.css';
import '../../css/t/t-4am071a.css';
import '../../css/h/h7je_ubfe.css';
import '../../css/h/hx15zqp6f.css';
import '../../css/n/nckffrb0r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqiw94bsr"/><path clip-rule="evenodd" class="t-4am071a"/><path class="h7je_ubfe"/><path class="hx15zqp6f"/><path class="nckffrb0r"/></g>`,
		"fallback": "streamline-color:notification-message-alert",
	});
}

export default Component;
