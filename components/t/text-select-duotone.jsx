import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rk0wi379s.css';
import '../../css/e/ewg-9bb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rk0wi379s secondary"/><path class="ewg-9bb6y primary"/></g>`,
		"fallback": "iconaut:text-select-duotone",
	});
}

export default Component;
