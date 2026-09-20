import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3lgw3bnn.css';
import '../../css/j/jjbwixl_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c3lgw3bnn"/><path class="jjbwixl_o"/></g>`,
		"fallback": "reicon:ufo",
	});
}

export default Component;
