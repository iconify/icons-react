import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2bqdccrg.css';
import '../../css/f/f_m57odjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2bqdccrg secondary"/><path class="f_m57odjs primary"/></g>`,
		"fallback": "iconaut:picture-in-picture-off-duotone",
	});
}

export default Component;
