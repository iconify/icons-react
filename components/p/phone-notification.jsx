import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilzg0rbou.css';
import '../../css/q/qrj7tbbdr.css';
import '../../css/l/lbtxys0iu.css';
import '../../css/x/xnxf21bni.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ilzg0rbou"/><path class="qrj7tbbdr"/><path class="lbtxys0iu"/><path class="xnxf21bni"/></g>`,
		"fallback": "streamline-flex-color:phone-notification",
	});
}

export default Component;
