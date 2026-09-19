import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3ghrib2x.css';
import '../../css/e/eex8wtb1s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o3ghrib2x"/><path class="eex8wtb1s"/></g>`,
		"fallback": "glyphs:rain-bold",
	});
}

export default Component;
