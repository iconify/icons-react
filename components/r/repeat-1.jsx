import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z6zwzhi8a.css';
import '../../css/l/l397gsbwn.css';
import '../../css/h/h_sq5lbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="z6zwzhi8a"/><path class="l397gsbwn"/><path class="h_sq5lbcs wm-s"/></g>`,
		"fallback": "withicons-retro:repeat-1",
	});
}

export default Component;
