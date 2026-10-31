import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lq98x_bxd.css';
import '../../css/l/ltenu6dbq.css';
import '../../css/e/er6tn7e0u.css';
import '../../css/b/bfvrotjgs.css';
import '../../css/u/u4l92b44u.css';
import '../../css/g/gffip5ieg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lq98x_bxd wm-shadow"/><path class="ltenu6dbq"/><path class="er6tn7e0u"/><path class="bfvrotjgs"/><path class="u4l92b44u"/><path class="gffip5ieg"/></g>`,
		"fallback": "withicons-retro:thermometer-sun",
	});
}

export default Component;
