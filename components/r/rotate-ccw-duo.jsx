import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mrpsvib8v.css';
import '../../css/e/e4v6jpbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mrpsvib8v"/><path class="e4v6jpbkb wm-a"/></g>`,
		"fallback": "withicons:rotate-ccw-duo",
	});
}

export default Component;
