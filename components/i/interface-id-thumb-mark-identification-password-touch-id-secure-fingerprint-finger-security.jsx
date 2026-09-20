import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s6raefwhp.css';
import '../../css/v/vczeskbrq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s6raefwhp"/><path class="vczeskbrq"/></g>`,
		"fallback": "streamline:interface-id-thumb-mark-identification-password-touch-id-secure-fingerprint-finger-security",
	});
}

export default Component;
