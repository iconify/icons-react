import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y1_qhmb2d.css';
import '../../css/b/bx0wdaclv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y1_qhmb2d"/><path class="bx0wdaclv wm-a"/></g>`,
		"fallback": "withicons:skip-back",
	});
}

export default Component;
