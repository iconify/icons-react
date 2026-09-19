import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkp34ciwb.css';
import '../../css/q/q9puj3dcd.css';
import '../../css/w/w_fsnfbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wkp34ciwb"/><path class="q9puj3dcd"/><path class="w_fsnfbca"/></g>`,
		"fallback": "flowbite:laptop-file-solid",
	});
}

export default Component;
