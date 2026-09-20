import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w86377v7g.css';
import '../../css/r/rp3njeb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w86377v7g"/><path class="rp3njeb5m"/></g>`,
		"fallback": "solar:notes-minimalistic-bold-duotone",
	});
}

export default Component;
