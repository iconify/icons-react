import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h7ciwbkot.css';
import '../../css/r/rlvmsgbrc.css';
import '../../css/k/kcx1t5r2r.css';
import '../../css/c/c8ge6iu5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h7ciwbkot wm-k"/><path class="rlvmsgbrc"/><path class="kcx1t5r2r"/><path class="c8ge6iu5i wm-s"/></g>`,
		"fallback": "withicons-bauhaus:shower-head",
	});
}

export default Component;
