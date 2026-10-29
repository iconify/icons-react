import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tph8vb83n.css';
import '../../css/e/ewn913uqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tph8vb83n"/><path class="ewn913uqn wm-a"/></g>`,
		"fallback": "withicons:pill",
	});
}

export default Component;
