import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqz1t_byv.css';
import '../../css/w/wl2pvqt_t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kqz1t_byv"/><path clip-rule="evenodd" class="wl2pvqt_t"/></g>`,
		"fallback": "glyphs:pencil-1-bold",
	});
}

export default Component;
