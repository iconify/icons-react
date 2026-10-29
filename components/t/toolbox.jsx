import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9lq-0bsu.css';
import '../../css/s/spa5w1b_u.css';
import '../../css/b/b3fp9-wfe.css';
import '../../css/p/pj47wlbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d9lq-0bsu"/><path class="spa5w1b_u"/><path class="b3fp9-wfe"/><path class="pj47wlbgr"/></g>`,
		"fallback": "withicons-bauhaus:toolbox",
	});
}

export default Component;
