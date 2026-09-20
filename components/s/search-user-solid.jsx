import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cp33jckge.css';
import '../../css/y/y0q4sxb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cp33jckge"/><path class="y0q4sxb-s"/></g>`,
		"fallback": "mynaui:search-user-solid",
	});
}

export default Component;
