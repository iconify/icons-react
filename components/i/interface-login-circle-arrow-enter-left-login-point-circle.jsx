import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7u5l0ehn.css';
import '../../css/n/nfx32g5yf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w7u5l0ehn"/><path class="nfx32g5yf"/></g>`,
		"fallback": "streamline:interface-login-circle-arrow-enter-left-login-point-circle",
	});
}

export default Component;
