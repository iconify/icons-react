import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h65e0tmly.css';
import '../../css/s/s53tgbb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h65e0tmly"/><path class="s53tgbb5w wm-a"/></g>`,
		"fallback": "withicons:split-duo",
	});
}

export default Component;
