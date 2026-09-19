import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n14chbfwk.css';
import '../../css/e/emgxk2bvk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n14chbfwk"/><path clip-rule="evenodd" class="emgxk2bvk"/></g>`,
		"fallback": "glyphs:mobile-tablet-bold",
	});
}

export default Component;
