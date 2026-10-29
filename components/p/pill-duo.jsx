import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bb_du2bxr.css';
import '../../css/e/ewn913uqn.css';
import '../../css/t/tph8vb83n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bb_du2bxr"/><path class="ewn913uqn wm-a"/><path class="tph8vb83n"/></g>`,
		"fallback": "withicons:pill-duo",
	});
}

export default Component;
