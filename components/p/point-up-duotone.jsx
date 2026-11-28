import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_wg4qb0b.css';
import '../../css/b/bg4v90emo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p_wg4qb0b secondary"/><path class="bg4v90emo primary"/></g>`,
		"fallback": "iconaut:point-up-duotone",
	});
}

export default Component;
