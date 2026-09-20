import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqc0gdbam.css';
import '../../css/l/lledggubd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lqc0gdbam"/><path class="lledggubd"/></g>`,
		"fallback": "solar:list-up-minimalistic-bold-duotone",
	});
}

export default Component;
