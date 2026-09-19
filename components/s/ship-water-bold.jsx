import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1c000c5t.css';
import '../../css/c/cecui5bdg.css';
import '../../css/q/qxy675oxf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b1c000c5t"/><path class="cecui5bdg"/><path class="qxy675oxf"/></g>`,
		"fallback": "glyphs:ship-water-bold",
	});
}

export default Component;
