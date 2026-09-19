import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ka_x63bfg.css';
import '../../css/y/yi1q1lbvm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ka_x63bfg"/><path class="yi1q1lbvm"/></g>`,
		"fallback": "glyphs:mouse-bold",
	});
}

export default Component;
