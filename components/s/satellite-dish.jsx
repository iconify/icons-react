import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w9sg-gfxl.css';
import '../../css/t/tbd9zv54t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w9sg-gfxl"/><path class="tbd9zv54t"/></g>`,
		"fallback": "glyphs:satellite-dish",
	});
}

export default Component;
