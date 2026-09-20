import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy9rdbuvy.css';
import '../../css/t/tj0h6ru8e.css';
import '../../css/w/w1_y2vige.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qy9rdbuvy"/><path class="tj0h6ru8e"/><path class="w1_y2vige"/></g>`,
		"fallback": "solar:washing-machine-outline",
	});
}

export default Component;
