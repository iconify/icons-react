import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4ogvmb8v.css';
import '../../css/w/w7kpeoqph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p4ogvmb8v"/><path class="w7kpeoqph"/></g>`,
		"fallback": "solar:notebook-minimalistic-bold-duotone",
	});
}

export default Component;
