import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9j2q5k-h.css';
import '../../css/d/dzevycbzt.css';
import '../../css/t/tz6w_ozgi.css';
import '../../css/v/v3e_w0bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y9j2q5k-h"/><path class="dzevycbzt"/><path class="tz6w_ozgi"/><path class="v3e_w0bfi"/></g>`,
		"fallback": "solar:stopwatch-pause-bold-duotone",
	});
}

export default Component;
