import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmhqtra8a.css';
import '../../css/e/e4naw8x2g.css';
import '../../css/e/e886txqpd.css';
import '../../css/z/zsc2x9xjn.css';
import '../../css/s/sm4-xcb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rmhqtra8a"/><path class="e4naw8x2g"/><path class="e886txqpd"/><path class="zsc2x9xjn"/><path class="sm4-xcb7r"/></g>`,
		"fallback": "solar:palette-2-bold-duotone",
	});
}

export default Component;
