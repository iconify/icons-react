import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sa6lq1bmp.css';
import '../../css/u/uikv59vvp.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="sa6lq1bmp"/><path class="uikv59vvp"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:line-slant-down-off",
	});
}

export default Component;
