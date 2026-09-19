import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/p9--ovb7o.css';
import '../../css/s/sqpivhksc.css';
import '../../css/k/kivyvktmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="p9--ovb7o"/><path clip-rule="evenodd" class="sqpivhksc"/><path class="kivyvktmd"/></g>`,
		"fallback": "icon-park-outline:monitor",
	});
}

export default Component;
