import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xyb8xnbmc.css';
import '../../css/y/y587f1bxu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xyb8xnbmc"/><path class="y587f1bxu"/></g>`,
		"fallback": "glyphs:layer-minus",
	});
}

export default Component;
