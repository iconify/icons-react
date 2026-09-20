import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zqgxwn5df.css';
import '../../css/f/f9bv6mbbv.css';
import '../../css/m/mt1nnt_ai.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zqgxwn5df"/><circle class="f9bv6mbbv"/><path class="mt1nnt_ai"/></g>`,
		"fallback": "streamline:interface-security-shield-profileshield-secure-security-profile-person",
	});
}

export default Component;
