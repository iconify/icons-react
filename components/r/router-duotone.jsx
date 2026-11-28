import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fssddubdo.css';
import '../../css/l/ldulicbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fssddubdo secondary"/><path class="ldulicbqr primary"/></g>`,
		"fallback": "iconaut:router-duotone",
	});
}

export default Component;
