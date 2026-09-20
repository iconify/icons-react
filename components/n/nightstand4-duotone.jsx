import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q16c5x_1d.css';
import '../../css/w/w9wz_khcd.css';
import '../../css/g/gjvxlybha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q16c5x_1d"/><path class="w9wz_khcd"/><path class="gjvxlybha"/></g>`,
		"fallback": "reicon:nightstand4-duotone",
	});
}

export default Component;
