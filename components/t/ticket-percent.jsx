import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q-55d_bvt.css';
import '../../css/s/sq9ejvb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q-55d_bvt"/><path class="sq9ejvb2i wm-a"/></g>`,
		"fallback": "withicons:ticket-percent",
	});
}

export default Component;
