import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xwb44uomz.css';
import '../../css/u/u5mc0lbal.css';
import '../../css/z/zxv6q_k0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xwb44uomz"/><path class="u5mc0lbal"/><path class="zxv6q_k0p"/></g>`,
		"fallback": "streamline:travel-wayfinder-man-arm-raises-2-man-raise-arm-scaning-detect-posture-security",
	});
}

export default Component;
