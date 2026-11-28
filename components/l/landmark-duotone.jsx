import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4x69sb_e.css';
import '../../css/d/d9_ia72oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary y4x69sb_e"/><path class="d9_ia72oj primary"/></g>`,
		"fallback": "iconaut:landmark-duotone",
	});
}

export default Component;
