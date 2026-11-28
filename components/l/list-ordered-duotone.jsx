import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5_m8o1jf.css';
import '../../css/v/vfbkcdchm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5_m8o1jf secondary"/><path class="primary vfbkcdchm"/></g>`,
		"fallback": "iconaut:list-ordered-duotone",
	});
}

export default Component;
