import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_drxzbot.css';
import '../../css/q/q6zrlybpu.css';
import '../../css/k/kzhpbebmd.css';
import '../../css/d/dwgs_gdah.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b_drxzbot"/><path clip-rule="evenodd" class="q6zrlybpu"/><path clip-rule="evenodd" class="kzhpbebmd"/><path clip-rule="evenodd" class="dwgs_gdah"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:sliders-off",
	});
}

export default Component;
