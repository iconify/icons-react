import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/ztrt4stou.css';
import '../../css/u/u3it35-cp.css';
import '../../css/h/hy2zpeeom.css';
import '../../css/c/ch9c8pwdc.css';
import '../../css/h/h1kmcmdpb.css';
import '../../css/i/ig7decbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow ztrt4stou"/><path class="u3it35-cp"/><path class="hy2zpeeom"/><path class="ch9c8pwdc"/><path class="h1kmcmdpb"/><path class="ig7decbqh"/></g>`,
		"fallback": "withicons-retro:signal",
	});
}

export default Component;
