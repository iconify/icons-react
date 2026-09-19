import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kkcs6ebra.css';
import '../../css/d/dxef960ug.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kkcs6ebra"/><path class="dxef960ug"/></g>`,
		"fallback": "glyphs:mouse-pointer-bold",
	});
}

export default Component;
