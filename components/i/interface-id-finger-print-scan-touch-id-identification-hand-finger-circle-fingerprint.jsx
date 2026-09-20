import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hw-o4ub5z.css';
import '../../css/d/diex25bce.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hw-o4ub5z"/><path class="diex25bce"/></g>`,
		"fallback": "streamline:interface-id-finger-print-scan-touch-id-identification-hand-finger-circle-fingerprint",
	});
}

export default Component;
