import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kemmwwb6r.css';
import '../../css/z/zf9mdkp_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kemmwwb6r"/><path clip-rule="evenodd" class="zf9mdkp_a"/></g>`,
		"fallback": "glyphs:tachometer-1-bold",
	});
}

export default Component;
