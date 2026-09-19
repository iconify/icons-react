import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nhlx0_frk.css';
import '../../css/b/bza97acfe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nhlx0_frk"/><path class="bza97acfe"/></g>`,
		"fallback": "glyphs:virus",
	});
}

export default Component;
