import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6tl7ybcd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qigovot_c.css';
import '../../css/v/v-s_f4e2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t6tl7ybcd"/><g class="mc2zb0bvp"><path class="qigovot_c"/><path class="v-s_f4e2d"/></g></g>`,
		"fallback": "solar:list-bold-duotone",
	});
}

export default Component;
