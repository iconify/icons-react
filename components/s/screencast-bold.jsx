import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8x5fnbye.css';
import '../../css/d/dc-k-0ubs.css';
import '../../css/c/cuksg3bdf.css';
import '../../css/v/vfu80czwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c8x5fnbye"/><path class="dc-k-0ubs"/><path class="cuksg3bdf"/><path class="vfu80czwa"/></g>`,
		"fallback": "solar:screencast-bold",
	});
}

export default Component;
