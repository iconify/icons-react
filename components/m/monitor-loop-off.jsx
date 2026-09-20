import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bwis17j6i.css';
import '../../css/c/cobbi21gd.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="bwis17j6i"/><path class="cobbi21gd"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:monitor-loop-off",
	});
}

export default Component;
