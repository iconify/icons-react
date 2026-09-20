import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uspk1ccev.css';
import '../../css/x/x0i1b1bbc.css';
import '../../css/s/suxtfubdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uspk1ccev"/><path class="x0i1b1bbc"/><path class="suxtfubdx"/></g>`,
		"fallback": "mynaui:user-waves-solid",
	});
}

export default Component;
