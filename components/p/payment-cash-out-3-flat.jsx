import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkj4-xbpu.css';
import '../../css/x/xvq7301im.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pkj4-xbpu"/><path clip-rule="evenodd" class="xvq7301im"/></g>`,
		"fallback": "streamline-color:payment-cash-out-3-flat",
	});
}

export default Component;
