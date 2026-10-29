import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/se-jdubva.css';
import '../../css/o/or-t-y_mm.css';
import '../../css/q/q-55d_bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="se-jdubva"/><path class="or-t-y_mm wm-a"/><path class="q-55d_bvt"/></g>`,
		"fallback": "withicons:ticket-duo",
	});
}

export default Component;
