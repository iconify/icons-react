import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkpg3_byn.css';
import '../../css/c/cfvq8wjbx.css';
import '../../css/n/np712fb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dkpg3_byn"/><path class="cfvq8wjbx"/><path class="np712fb0q"/></g>`,
		"fallback": "solar:monitor-camera-bold-duotone",
	});
}

export default Component;
