import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfnc-htwk.css';
import '../../css/v/vfx4hwblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bfnc-htwk"/><path class="vfx4hwblx"/></g>`,
		"fallback": "nrk:list-plus",
	});
}

export default Component;
