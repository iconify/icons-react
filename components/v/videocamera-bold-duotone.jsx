import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybtsdob7h.css';
import '../../css/g/g61gfabvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ybtsdob7h"/><path class="g61gfabvb"/></g>`,
		"fallback": "solar:videocamera-bold-duotone",
	});
}

export default Component;
