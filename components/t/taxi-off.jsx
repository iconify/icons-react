import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sti5_nikw.css';
import '../../css/e/ece434l3x.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sti5_nikw"/><path clip-rule="evenodd" class="ece434l3x"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:taxi-off",
	});
}

export default Component;
