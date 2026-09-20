import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xcv6q1bnv.css';
import '../../css/q/qxhbm4b0r.css';
import '../../css/z/zkx3ogbcv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xcv6q1bnv"/><circle class="qxhbm4b0r"/><path class="zkx3ogbcv"/></g>`,
		"fallback": "streamline:interface-lock-circle-circle-frame-key-keyhole-lock-locked-secure-security",
	});
}

export default Component;
