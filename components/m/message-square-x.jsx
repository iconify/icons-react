import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/g/g-im3025e.css';
import '../../css/u/u2l8x0bhc.css';
import '../../css/a/ar9hq9fie.css';
import '../../css/c/c6i3j7cba.css';
import '../../css/z/zhawrxb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="g-im3025e"/><path class="u2l8x0bhc"/><path class="ar9hq9fie"/><path class="c6i3j7cba"/><path class="zhawrxb9t"/></g>`,
		"fallback": "withicons-retro:message-square-x",
	});
}

export default Component;
