import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l70_4vbiv.css';
import '../../css/r/rttvswmxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l70_4vbiv"/><path class="rttvswmxp"/></g>`,
		"fallback": "reicon:link-off",
	});
}

export default Component;
