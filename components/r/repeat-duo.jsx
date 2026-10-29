import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q1pio2buw.css';
import '../../css/g/gdtfzh2qz.css';
import '../../css/v/vvbqvot1n.css';
import '../../css/g/gp29cxbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q1pio2buw"/><path class="gdtfzh2qz wm-a"/><path class="vvbqvot1n"/><path class="gp29cxbhj wm-a"/></g>`,
		"fallback": "withicons:repeat-duo",
	});
}

export default Component;
