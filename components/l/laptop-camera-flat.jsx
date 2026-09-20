import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr-cgqdss.css';
import '../../css/j/jvtpken9f.css';
import '../../css/k/kx89ncxce.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rr-cgqdss"/><path class="jvtpken9f"/><path clip-rule="evenodd" class="kx89ncxce"/></g>`,
		"fallback": "streamline-color:laptop-camera-flat",
	});
}

export default Component;
