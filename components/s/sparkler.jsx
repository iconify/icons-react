import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hsgg6j0lp.css';
import '../../css/m/m3mfq9x2i.css';
import '../../css/j/jgwm0beal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hsgg6j0lp"/><path class="m3mfq9x2i wm-a"/><path class="jgwm0beal wm-s"/></g>`,
		"fallback": "withicons:sparkler",
	});
}

export default Component;
