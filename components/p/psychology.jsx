import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqb1nds4s.css';
import '../../css/y/y6m1c19td.css';
import '../../css/l/lvz26h8eq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aqb1nds4s"/><path class="y6m1c19td"/><path clip-rule="evenodd" class="lvz26h8eq"/></g>`,
		"fallback": "healthicons:psychology",
	});
}

export default Component;
