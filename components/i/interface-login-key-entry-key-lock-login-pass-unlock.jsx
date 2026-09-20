import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/ms1nvcc_y.css';
import '../../css/v/v01g_fbqn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ms1nvcc_y"/><circle class="v01g_fbqn"/></g>`,
		"fallback": "streamline:interface-login-key-entry-key-lock-login-pass-unlock",
	});
}

export default Component;
