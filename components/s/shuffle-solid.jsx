import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqvb9ibwy.css';
import '../../css/j/j014asb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uqvb9ibwy"/><path class="j014asb2h"/></g>`,
		"fallback": "mynaui:shuffle-solid",
	});
}

export default Component;
