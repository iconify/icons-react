import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/anwq7chxl.css';
import '../../css/z/zb3qvtbog.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="anwq7chxl"/><path class="zb3qvtbog"/></g>`,
		"fallback": "glyphs:ticket-bold",
	});
}

export default Component;
