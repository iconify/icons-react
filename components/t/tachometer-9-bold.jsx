import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvifrybra.css';
import '../../css/l/lrpgtibop.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cvifrybra"/><path clip-rule="evenodd" class="lrpgtibop"/></g>`,
		"fallback": "glyphs:tachometer-9-bold",
	});
}

export default Component;
