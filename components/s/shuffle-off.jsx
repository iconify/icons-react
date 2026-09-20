import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wplr_9b2m.css';
import '../../css/m/m5cuh9a3g.css';
import '../../css/k/kz72l8bmh.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wplr_9b2m"/><path clip-rule="evenodd" class="m5cuh9a3g"/><path clip-rule="evenodd" class="kz72l8bmh"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:shuffle-off",
	});
}

export default Component;
