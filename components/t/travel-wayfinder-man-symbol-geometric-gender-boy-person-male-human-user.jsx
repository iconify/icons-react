import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p2hyd_b0v.css';
import '../../css/d/dl23aac2s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="p2hyd_b0v"/><path class="dl23aac2s"/></g>`,
		"fallback": "streamline:travel-wayfinder-man-symbol-geometric-gender-boy-person-male-human-user",
	});
}

export default Component;
