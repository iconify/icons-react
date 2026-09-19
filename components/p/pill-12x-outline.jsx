import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyzx-o7pi.css';
import '../../css/w/wi8hi9iwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyzx-o7pi"/><path clip-rule="evenodd" class="wi8hi9iwd"/></g>`,
		"fallback": "healthicons:pill-12x-outline",
	});
}

export default Component;
