import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0k_5xxgk.css';
import '../../css/b/bc-0_z50q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c0k_5xxgk"/><path class="bc-0_z50q"/></g>`,
		"fallback": "healthicons:llin",
	});
}

export default Component;
