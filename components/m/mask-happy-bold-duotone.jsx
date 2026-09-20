import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wel6-sfco.css';
import '../../css/e/e3uzo1utx.css';
import '../../css/v/vx2z6dbbm.css';
import '../../css/v/vibdus27q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wel6-sfco"/><path class="e3uzo1utx"/><path class="vx2z6dbbm"/><path class="vibdus27q"/></g>`,
		"fallback": "solar:mask-happy-bold-duotone",
	});
}

export default Component;
