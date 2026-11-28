import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwmpuh2or.css';
import '../../css/p/p8e5jjk0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwmpuh2or secondary"/><path class="p8e5jjk0f primary"/></g>`,
		"fallback": "iconaut:teacher-duotone",
	});
}

export default Component;
