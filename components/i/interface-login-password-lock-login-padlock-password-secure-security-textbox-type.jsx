import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v97dtybos.css';
import '../../css/o/ovu9dzm8y.css';
import '../../css/k/k7mij8x_k.css';
import '../../css/a/aqw6qqcvy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="v97dtybos"/><circle class="ovu9dzm8y"/><circle class="k7mij8x_k"/><path class="aqw6qqcvy"/></g>`,
		"fallback": "streamline:interface-login-password-lock-login-padlock-password-secure-security-textbox-type",
	});
}

export default Component;
