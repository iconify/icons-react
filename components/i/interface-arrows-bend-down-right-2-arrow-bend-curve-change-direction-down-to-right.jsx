import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zwls8d_oz.css';
import '../../css/c/c04bsynun.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zwls8d_oz"/><path class="c04bsynun"/></g>`,
		"fallback": "streamline:interface-arrows-bend-down-right-2-arrow-bend-curve-change-direction-down-to-right",
	});
}

export default Component;
