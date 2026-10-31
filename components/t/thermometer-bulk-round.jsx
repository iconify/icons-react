import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q95mx0efm.css';
import '../../css/v/vpa8bs10m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q95mx0efm"/><path class="vpa8bs10m"/></g>`,
		"fallback": "coolicons:thermometer-bulk-round",
	});
}

export default Component;
