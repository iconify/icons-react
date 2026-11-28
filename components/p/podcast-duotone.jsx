import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hcgoq0b8x.css';
import '../../css/q/q8-vxccrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hcgoq0b8x secondary"/><path class="primary q8-vxccrg"/></g>`,
		"fallback": "iconaut:podcast-duotone",
	});
}

export default Component;
