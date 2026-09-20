import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7binl74z.css';
import '../../css/b/bd233ypbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7binl74z"/><path class="bd233ypbm"/></g>`,
		"fallback": "reicon:text-square2",
	});
}

export default Component;
