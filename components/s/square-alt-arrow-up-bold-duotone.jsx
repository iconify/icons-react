import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gs6iy1bvy.css';
import '../../css/q/qqfvl-btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gs6iy1bvy"/><path class="qqfvl-btp"/></g>`,
		"fallback": "solar:square-alt-arrow-up-bold-duotone",
	});
}

export default Component;
