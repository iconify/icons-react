import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xymonk2xk.css';
import '../../css/l/lgvql2gct.css';
import '../../css/g/g6tbghb9g.css';
import '../../css/f/fvury-90w.css';
import '../../css/w/wj15btluw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xymonk2xk"/><path class="lgvql2gct"/><path class="g6tbghb9g"/><path class="fvury-90w"/><path class="wj15btluw"/></g>`,
		"fallback": "withicons-retro:layout-grid",
	});
}

export default Component;
