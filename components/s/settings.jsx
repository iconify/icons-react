import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bp8ecnj5l.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bp8ecnj5l"/><path class="hbi8hhkfx wm-a"/></g>`,
		"fallback": "withicons:settings",
	});
}

export default Component;
