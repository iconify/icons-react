import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdb00jb5q.css';
import '../../css/n/n5gevi3lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fdb00jb5q secondary"/><path class="n5gevi3lk primary"/></g>`,
		"fallback": "iconaut:lightbulb-duotone",
	});
}

export default Component;
