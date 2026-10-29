import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m7_yunpth.css';
import '../../css/m/m3y59dfla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m7_yunpth"/><path class="m3y59dfla"/></g>`,
		"fallback": "withicons:triangle-duo",
	});
}

export default Component;
