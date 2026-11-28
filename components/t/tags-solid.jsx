import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d35ntdbxm.css';
import '../../css/v/v001_uqdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d35ntdbxm"/><path class="v001_uqdo"/></g>`,
		"fallback": "iconaut:tags-solid",
	});
}

export default Component;
