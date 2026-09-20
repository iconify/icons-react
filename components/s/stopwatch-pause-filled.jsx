import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0eoa2bsm.css';
import '../../css/p/pi_1h72gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m0eoa2bsm"/><path class="pi_1h72gk"/></g>`,
		"fallback": "reicon:stopwatch-pause-filled",
	});
}

export default Component;
