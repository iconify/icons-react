import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nl8-p_oam.css';
import '../../css/w/waq7z7bxd.css';
import '../../css/j/j5lz2obhd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nl8-p_oam"/><path clip-rule="evenodd" class="waq7z7bxd"/><path class="j5lz2obhd"/></g>`,
		"fallback": "glyphs:loveseat-bold",
	});
}

export default Component;
