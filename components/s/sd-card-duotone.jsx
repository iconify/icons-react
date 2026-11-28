import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkn2gdtoo.css';
import '../../css/d/dy2861g4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lkn2gdtoo secondary"/><path class="dy2861g4e primary"/></g>`,
		"fallback": "iconaut:sd-card-duotone",
	});
}

export default Component;
