import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nv6lo7unl.css';
import '../../css/g/g_ay5sxqi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nv6lo7unl"/><path class="g_ay5sxqi"/></g>`,
		"fallback": "glyphs:search-1-bold",
	});
}

export default Component;
