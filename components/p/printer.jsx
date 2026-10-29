import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/flvjb4byi.css';
import '../../css/c/ce4_fwbku.css';
import '../../css/v/v4zv_uo1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="flvjb4byi wm-a"/><path class="ce4_fwbku"/><path class="v4zv_uo1i wm-a"/></g>`,
		"fallback": "withicons:printer",
	});
}

export default Component;
