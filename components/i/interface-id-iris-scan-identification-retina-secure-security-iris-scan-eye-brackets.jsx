import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ccq-ml7uw.css';
import '../../css/c/cq971jbmr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ccq-ml7uw"/><circle class="cq971jbmr"/></g>`,
		"fallback": "streamline:interface-id-iris-scan-identification-retina-secure-security-iris-scan-eye-brackets",
	});
}

export default Component;
