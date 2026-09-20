import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxf_y46er.css';
import '../../css/q/q-ysljqry.css';
import '../../css/x/xyl_j6bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fxf_y46er"/><path class="q-ysljqry"/><path class="xyl_j6bra"/></g>`,
		"fallback": "solar:swimming-bold",
	});
}

export default Component;
