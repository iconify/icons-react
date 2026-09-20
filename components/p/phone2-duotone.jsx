import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gi3rjdinr.css';
import '../../css/w/wpjj42-my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gi3rjdinr"/><path class="wpjj42-my"/></g>`,
		"fallback": "reicon:phone2-duotone",
	});
}

export default Component;
