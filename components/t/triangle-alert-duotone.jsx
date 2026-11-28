import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8ncnhb_z.css';
import '../../css/f/fqa2v7f2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8ncnhb_z secondary"/><path class="fqa2v7f2j primary"/></g>`,
		"fallback": "iconaut:triangle-alert-duotone",
	});
}

export default Component;
