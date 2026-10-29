import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fb_n1soxb.css';
import '../../css/n/nt61q7bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fb_n1soxb"/><path class="nt61q7bou wm-a"/></g>`,
		"fallback": "withicons:person-swimming",
	});
}

export default Component;
