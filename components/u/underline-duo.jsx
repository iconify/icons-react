import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h-pfqgbzl.css';
import '../../css/d/dc6exx_io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h-pfqgbzl"/><path class="dc6exx_io wm-a"/></g>`,
		"fallback": "withicons:underline-duo",
	});
}

export default Component;
