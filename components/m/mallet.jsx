import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/piyklo1lz.css';
import '../../css/r/rm00fuxbq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="piyklo1lz"/><path class="rm00fuxbq"/></g>`,
		"fallback": "glyphs:mallet",
	});
}

export default Component;
