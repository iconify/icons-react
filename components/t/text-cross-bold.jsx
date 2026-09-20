import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/si8v7jbgr.css';
import '../../css/g/gtawe4d4l.css';
import '../../css/e/e5clwxbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="si8v7jbgr"/><path class="gtawe4d4l"/><path class="e5clwxbmn"/></g>`,
		"fallback": "solar:text-cross-bold",
	});
}

export default Component;
