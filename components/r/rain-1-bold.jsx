import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8_h2nz-s.css';
import '../../css/a/ab0rjjnvp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a8_h2nz-s"/><path class="ab0rjjnvp"/></g>`,
		"fallback": "glyphs:rain-1-bold",
	});
}

export default Component;
