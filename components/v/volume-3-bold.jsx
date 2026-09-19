import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbwoj0bxn.css';
import '../../css/k/km-ba8aek.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cbwoj0bxn"/><path class="km-ba8aek"/></g>`,
		"fallback": "glyphs:volume-3-bold",
	});
}

export default Component;
