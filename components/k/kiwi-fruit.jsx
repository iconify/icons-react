import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dw2gvubxq.css';
import '../../css/d/d27u_bc_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dw2gvubxq"/><path class="d27u_bc_x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:kiwi-fruit",
	});
}

export default Component;
