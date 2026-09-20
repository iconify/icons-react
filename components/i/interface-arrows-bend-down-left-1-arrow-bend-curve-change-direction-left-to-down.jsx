import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hx8-f6wgf.css';
import '../../css/z/zdn-r8bbf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hx8-f6wgf"/><path class="zdn-r8bbf"/></g>`,
		"fallback": "streamline:interface-arrows-bend-down-left-1-arrow-bend-curve-change-direction-left-to-down",
	});
}

export default Component;
