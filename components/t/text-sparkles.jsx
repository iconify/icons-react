import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/c/ciui2qe_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gz4rmvf3e"/><path class="ciui2qe_b wm-s"/></g>`,
		"fallback": "withicons:text-sparkles",
	});
}

export default Component;
