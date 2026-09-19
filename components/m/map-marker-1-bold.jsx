import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ght5bh84z.css';
import '../../css/k/kx8m36bdy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ght5bh84z"/><path class="kx8m36bdy"/></g>`,
		"fallback": "glyphs:map-marker-1-bold",
	});
}

export default Component;
