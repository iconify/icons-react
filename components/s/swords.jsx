import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l94lzwbyd.css';
import '../../css/f/f-1kttb5g.css';
import '../../css/t/tx8qkwbor.css';
import '../../css/h/h7iky36fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l94lzwbyd"/><path class="f-1kttb5g"/><path class="tx8qkwbor"/><path class="h7iky36fi"/></g>`,
		"fallback": "iconaut:swords",
	});
}

export default Component;
