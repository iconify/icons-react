import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shx0bsbhg.css';
import '../../css/y/y0ix9jnwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="shx0bsbhg"/><path class="y0ix9jnwl"/></g>`,
		"fallback": "reicon:mirror2-filled",
	});
}

export default Component;
