import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uem5z8b7y.css';
import '../../css/c/capt-obsi.css';
import '../../css/q/q7ba_ub_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uem5z8b7y"/><circle class="capt-obsi"/><path class="q7ba_ub_d"/></g>`,
		"fallback": "streamline:interface-id-user-identification-angle-secure-human-id-person-face-silhouette-security-brackets",
	});
}

export default Component;
