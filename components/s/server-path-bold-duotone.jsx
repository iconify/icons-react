import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz2offb8l.css';
import '../../css/l/l8e_n23nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wz2offb8l"/><path class="l8e_n23nj"/></g>`,
		"fallback": "solar:server-path-bold-duotone",
	});
}

export default Component;
