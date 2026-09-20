import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ll4_62bvj.css';
import '../../css/v/vt2-zj73a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ll4_62bvj"/><path class="vt2-zj73a"/></g>`,
		"fallback": "solar:volume-bold-duotone",
	});
}

export default Component;
