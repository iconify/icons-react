import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s9wc6d-sy.css';
import '../../css/k/kzuac6bvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s9wc6d-sy"/><path class="kzuac6bvc"/></g>`,
		"fallback": "streamline:interface-id-iris-scan-check-identification-retina-security-approved-success-iris-scan-eye-login",
	});
}

export default Component;
