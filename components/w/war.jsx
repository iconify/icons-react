import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0svx51-g.css';
import '../../css/n/nxw_4zb_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0svx51-g"/><path clip-rule="evenodd" class="nxw_4zb_r"/></g>`,
		"fallback": "healthicons:war",
	});
}

export default Component;
