import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/txtwnjbdf.css';
import '../../css/z/zm17-uvzv.css';
import '../../css/p/p_196_o6j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="txtwnjbdf"/><path class="zm17-uvzv"/><path clip-rule="evenodd" class="p_196_o6j"/></g>`,
		"fallback": "glyphs:laptop-cog",
	});
}

export default Component;
