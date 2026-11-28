import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4ejtmbwe.css';
import '../../css/h/hpugojsok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4ejtmbwe secondary"/><path class="hpugojsok primary"/></g>`,
		"fallback": "iconaut:medal-duotone",
	});
}

export default Component;
