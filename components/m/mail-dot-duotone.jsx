import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_xvnzbbt.css';
import '../../css/n/nuc7r_bxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_xvnzbbt secondary"/><path class="nuc7r_bxm primary"/></g>`,
		"fallback": "iconaut:mail-dot-duotone",
	});
}

export default Component;
