import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/ckwd1hb4i.css';
import '../../css/b/b16p5jbue.css';
import '../../css/h/h-rapyb8q.css';
import '../../css/q/qj9egmsyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ckwd1hb4i wm-shadow"/><path class="b16p5jbue"/><path class="h-rapyb8q"/><path class="qj9egmsyr"/></g>`,
		"fallback": "withicons-retro:scan-eye",
	});
}

export default Component;
