import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vixwikbso.css';
import '../../css/c/c12m-i8cv.css';
import '../../css/q/q9pr1ac7t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vixwikbso"/><path clip-rule="evenodd" class="c12m-i8cv"/><path clip-rule="evenodd" class="q9pr1ac7t"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:next-track-off",
	});
}

export default Component;
