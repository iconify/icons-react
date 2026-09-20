import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx1xme7mo.css';
import '../../css/s/sfy2x80me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bx1xme7mo"/><path class="sfy2x80me"/></g>`,
		"fallback": "nrk:picture-in-picture-enter",
	});
}

export default Component;
