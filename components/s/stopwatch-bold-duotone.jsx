import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3e_w0bfi.css';
import '../../css/o/o2kzpwbuq.css';
import '../../css/t/tz6w_ozgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v3e_w0bfi"/><path class="o2kzpwbuq"/><path class="tz6w_ozgi"/></g>`,
		"fallback": "solar:stopwatch-bold-duotone",
	});
}

export default Component;
