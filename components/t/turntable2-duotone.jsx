import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eiq0qzbhx.css';
import '../../css/v/vc9yvwb-z.css';
import '../../css/e/e5yj4rbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eiq0qzbhx"/><path class="vc9yvwb-z"/><path class="e5yj4rbrr"/></g>`,
		"fallback": "reicon:turntable2-duotone",
	});
}

export default Component;
