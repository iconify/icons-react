import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0cv1drnt.css';
import '../../css/a/a0egqvb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r0cv1drnt"/><path clip-rule="evenodd" class="a0egqvb8f"/></g>`,
		"fallback": "reicon:vacuum-filled",
	});
}

export default Component;
