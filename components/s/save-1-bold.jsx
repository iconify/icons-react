import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpkhd7pvn.css';
import '../../css/l/lf3y5v97k.css';
import '../../css/b/bqwtorbgd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hpkhd7pvn"/><path clip-rule="evenodd" class="lf3y5v97k"/><path class="bqwtorbgd"/></g>`,
		"fallback": "glyphs:save-1-bold",
	});
}

export default Component;
