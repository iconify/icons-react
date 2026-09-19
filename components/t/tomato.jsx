import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rw_mb8bvf.css';
import '../../css/q/q2xx64f4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rw_mb8bvf"/><path class="q2xx64f4s"/></g>`,
		"fallback": "icon-park:tomato",
	});
}

export default Component;
