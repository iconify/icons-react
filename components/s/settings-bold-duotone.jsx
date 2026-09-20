import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q2bf50blt.css';
import '../../css/z/zld2b_kyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q2bf50blt"/><path class="zld2b_kyg"/></g>`,
		"fallback": "solar:settings-bold-duotone",
	});
}

export default Component;
