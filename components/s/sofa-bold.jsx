import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vmjdbbbns.css';
import '../../css/o/ovfl4e5in.css';
import '../../css/v/vu30hf7-w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vmjdbbbns"/><path clip-rule="evenodd" class="ovfl4e5in"/><path class="vu30hf7-w"/></g>`,
		"fallback": "glyphs:sofa-bold",
	});
}

export default Component;
