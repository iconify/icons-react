import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f_m3xtb9u.css';
import '../../css/a/aksylh53o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f_m3xtb9u"/><path class="aksylh53o"/></g>`,
		"fallback": "solar:minus-bold-duotone",
	});
}

export default Component;
