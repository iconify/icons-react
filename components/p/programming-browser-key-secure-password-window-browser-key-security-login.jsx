import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lpwymybtq.css';
import '../../css/m/mo0wwetnz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="lpwymybtq"/><path class="mo0wwetnz"/></g>`,
		"fallback": "streamline:programming-browser-key-secure-password-window-browser-key-security-login",
	});
}

export default Component;
