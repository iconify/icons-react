import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h88x5c3lf.css';
import '../../css/y/y7fs4hkzq.css';
import '../../css/f/fhb7nyb4h.css';
import '../../css/z/z5vq7_b7t.css';
import '../../css/x/xmhksab0q.css';
import '../../css/w/wizfjabku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h88x5c3lf wm-shadow"/><path class="y7fs4hkzq"/><path class="fhb7nyb4h"/><path class="z5vq7_b7t"/><path class="xmhksab0q"/><path class="wizfjabku"/></g>`,
		"fallback": "withicons-retro:potted-plant",
	});
}

export default Component;
