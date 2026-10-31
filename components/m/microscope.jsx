import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c7fv0cchs.css';
import '../../css/p/p0g_1wjlq.css';
import '../../css/t/t5ro9fbav.css';
import '../../css/k/koqfc1bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c7fv0cchs wm-shadow"/><path class="p0g_1wjlq"/><path class="t5ro9fbav"/><path class="koqfc1bhn"/></g>`,
		"fallback": "withicons-retro:microscope",
	});
}

export default Component;
