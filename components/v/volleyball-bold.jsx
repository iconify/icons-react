import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxgz8m3uf.css';
import '../../css/h/hz12p2b1h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wxgz8m3uf"/><path class="hz12p2b1h"/></g>`,
		"fallback": "glyphs:volleyball-bold",
	});
}

export default Component;
