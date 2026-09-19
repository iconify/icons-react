import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hbsrlibjk.css';
import '../../css/e/e6q1v-bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hbsrlibjk"/><path class="e6q1v-bow"/></g>`,
		"fallback": "iconoir:pocket",
	});
}

export default Component;
