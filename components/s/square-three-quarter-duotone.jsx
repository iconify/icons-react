import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz28tybvv.css';
import '../../css/i/ixk00pvvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jz28tybvv"/><path class="ixk00pvvv"/></g>`,
		"fallback": "keyline-icons:square-three-quarter-duotone",
	});
}

export default Component;
