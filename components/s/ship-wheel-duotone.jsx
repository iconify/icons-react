import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxd5k1pnt.css';
import '../../css/f/fljlsc6aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jxd5k1pnt secondary"/><path class="fljlsc6aj primary"/></g>`,
		"fallback": "iconaut:ship-wheel-duotone",
	});
}

export default Component;
