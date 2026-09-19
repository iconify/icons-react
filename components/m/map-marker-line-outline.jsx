import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nhuasxwps.css';
import '../../css/f/f0eqsgbfe.css';
import '../../css/m/mtmms9b1f.css';
import '../../css/v/v0oar45xh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nhuasxwps"/><path class="f0eqsgbfe"/><path class="mtmms9b1f"/><path class="v0oar45xh"/></g>`,
		"fallback": "glyphs:map-marker-line-outline",
	});
}

export default Component;
