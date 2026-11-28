import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fr0ryn5ng.css';
import '../../css/z/zqa4o_b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fr0ryn5ng"/><path class="zqa4o_b-g"/></g>`,
		"fallback": "iconaut:vote-solid",
	});
}

export default Component;
