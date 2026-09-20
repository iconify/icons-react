import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b6_l5cscb.css';
import '../../css/l/l8nr3484s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b6_l5cscb"/><path class="l8nr3484s"/></g>`,
		"fallback": "streamline:interface-arrows-bend-up-left-2-arrow-bend-curve-change-direction-left-to-up",
	});
}

export default Component;
