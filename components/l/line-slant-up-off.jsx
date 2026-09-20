import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r6wod7yvv.css';
import '../../css/s/sj5lnccsu.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="r6wod7yvv"/><path class="sj5lnccsu"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:line-slant-up-off",
	});
}

export default Component;
