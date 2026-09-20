import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xwb44uomz.css';
import '../../css/j/jlr8tib7u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xwb44uomz"/><path class="jlr8tib7u"/></g>`,
		"fallback": "streamline:travel-wayfinder-man-arm-raises-1-man-raise-arm-scaning-detect-posture-security",
	});
}

export default Component;
