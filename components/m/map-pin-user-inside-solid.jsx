import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojm8-v0gl.css';
import '../../css/h/hqep8_46z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ojm8-v0gl"/><path class="hqep8_46z"/></g>`,
		"fallback": "mynaui:map-pin-user-inside-solid",
	});
}

export default Component;
