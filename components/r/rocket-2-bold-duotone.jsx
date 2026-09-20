import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ed_lewb2r.css';
import '../../css/q/qbd-flbjx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xfbm2hbzi.css';
import '../../css/k/klsiukb5q.css';
import '../../css/j/jm0-70jfx.css';
import '../../css/y/y2wcldbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ed_lewb2r"/><path clip-rule="evenodd" class="qbd-flbjx"/><g class="mc2zb0bvp"><path class="xfbm2hbzi"/><path class="klsiukb5q"/><path class="jm0-70jfx"/><path class="y2wcldbxm"/></g></g>`,
		"fallback": "solar:rocket-2-bold-duotone",
	});
}

export default Component;
