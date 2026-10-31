import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/at8a73bhf.css';
import '../../css/f/f_32ei52f.css';
import '../../css/y/ymnguub2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="at8a73bhf wm-shadow"/><path class="f_32ei52f"/><path class="ymnguub2q"/></g>`,
		"fallback": "withicons-retro:sparkles",
	});
}

export default Component;
