import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/u/u1p3rl9ue.css';
import '../../css/e/ec8_5vbia.css';
import '../../css/s/sog0659hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l80i0rb1m"/><path class="u1p3rl9ue"/><path class="ec8_5vbia"/><path class="sog0659hq"/></g>`,
		"fallback": "solar:text-cross-circle-bold-duotone",
	});
}

export default Component;
