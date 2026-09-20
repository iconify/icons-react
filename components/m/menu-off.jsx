import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zfw_z-bkk.css';
import '../../css/e/eb0z1rbyl.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zfw_z-bkk"/><path clip-rule="evenodd" class="eb0z1rbyl"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:menu-off",
	});
}

export default Component;
