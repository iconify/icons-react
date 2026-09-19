import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1la3w9fi.css';
import '../../css/u/ug98nccik.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o1la3w9fi"/><path class="ug98nccik"/></g>`,
		"fallback": "glyphs:watch-fitness-bold",
	});
}

export default Component;
