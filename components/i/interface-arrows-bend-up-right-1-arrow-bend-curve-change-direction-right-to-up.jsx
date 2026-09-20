import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i0np4obda.css';
import '../../css/v/vlu28kb-t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i0np4obda"/><path class="vlu28kb-t"/></g>`,
		"fallback": "streamline:interface-arrows-bend-up-right-1-arrow-bend-curve-change-direction-right-to-up",
	});
}

export default Component;
