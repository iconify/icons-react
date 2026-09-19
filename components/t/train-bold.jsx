import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcmklcbcq.css';
import '../../css/y/y2b0wzbdj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vcmklcbcq"/><path class="y2b0wzbdj"/></g>`,
		"fallback": "glyphs:train-bold",
	});
}

export default Component;
