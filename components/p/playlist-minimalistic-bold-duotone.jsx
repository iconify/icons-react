import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qg3s_xfiv.css';
import '../../css/y/y-maskbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qg3s_xfiv"/><path class="y-maskbat"/></g>`,
		"fallback": "solar:playlist-minimalistic-bold-duotone",
	});
}

export default Component;
