import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2aaw0s2e.css';
import '../../css/q/q4txhdbib.css';
import '../../css/j/jwq3rc64j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x2aaw0s2e"/><path class="q4txhdbib"/><path class="jwq3rc64j"/></g>`,
		"fallback": "solar:server-path-outline",
	});
}

export default Component;
