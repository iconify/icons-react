import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iixq7mbfa.css';
import '../../css/h/h1d5ngbvk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="iixq7mbfa"/><path class="h1d5ngbvk"/></g>`,
		"fallback": "streamline:interface-login-arrow-enter-frame-left-login-point-rectangle",
	});
}

export default Component;
