import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yj4rt4l4o.css';
import '../../css/r/rv-h1qbyx.css';
import '../../css/j/jdwdohb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yj4rt4l4o"/><path class="rv-h1qbyx"/><path clip-rule="evenodd" class="jdwdohb8e"/></g>`,
		"fallback": "reicon:trellis-duotone",
	});
}

export default Component;
