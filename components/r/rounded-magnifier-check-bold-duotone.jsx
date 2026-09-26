import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_z2a8vzi.css';
import '../../css/z/zrg3iwbgr.css';
import '../../css/l/lao0k7bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="l_z2a8vzi"/><path class="zrg3iwbgr"/><path class="lao0k7bno"/></g>`,
		"fallback": "solar:rounded-magnifier-check-bold-duotone",
	});
}

export default Component;
