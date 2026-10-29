import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/or75ej8an.css';
import '../../css/h/h0_y3_bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="or75ej8an wm-k"/><path class="h0_y3_bgl wm-a"/></g>`,
		"fallback": "withicons-bauhaus:shapes",
	});
}

export default Component;
