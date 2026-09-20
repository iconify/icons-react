import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cnnw8bbsd.css';
import '../../css/k/k7c6dgs4d.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cnnw8bbsd"/><path clip-rule="evenodd" class="k7c6dgs4d"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:triangle-left-filled-off",
	});
}

export default Component;
