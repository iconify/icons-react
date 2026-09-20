import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rcmsweb6u.css';
import '../../css/n/nvvx5_b0w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rcmsweb6u"/><path class="nvvx5_b0w"/></g>`,
		"fallback": "streamline:interface-id-finger-print-identification-password-touch-id-secure-fingerprint-finger-security",
	});
}

export default Component;
