import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/grtsi1brp.css';
import '../../css/b/bzvmn6b6m.css';
import '../../css/u/un4hoccds.css';
import '../../css/t/t-1nknb8k.css';
import '../../css/x/xavj4ctvx.css';
import '../../css/d/d69a1ti0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="grtsi1brp wm-shadow"/><path class="bzvmn6b6m"/><path class="un4hoccds"/><path class="t-1nknb8k"/><path class="xavj4ctvx"/><path class="d69a1ti0h"/></g>`,
		"fallback": "withicons-retro:lollipop",
	});
}

export default Component;
