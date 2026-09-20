import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uivkatati.css';
import '../../css/p/p6d2gpbdr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uivkatati"/><path class="p6d2gpbdr"/></g>`,
		"fallback": "streamline:interface-arrows-bend-up-left-1-arrow-bend-curve-change-direction-left-to-up",
	});
}

export default Component;
