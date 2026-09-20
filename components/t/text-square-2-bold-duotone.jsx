import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xy466lr1p.css';
import '../../css/x/xxiusxbds.css';
import '../../css/y/y59y-fbee.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xy466lr1p"/><path class="xxiusxbds"/><path class="y59y-fbee"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:text-square-2-bold-duotone",
	});
}

export default Component;
