import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu7qyy4za.css';
import '../../css/l/lx_8qqvkc.css';
import '../../css/d/d0b6c1bum.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu7qyy4za"/><path class="lx_8qqvkc"/><path class="d0b6c1bum"/></g>`,
		"fallback": "glyphs:phone-remove-bold",
	});
}

export default Component;
