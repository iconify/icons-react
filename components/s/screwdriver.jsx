import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/il_myibjf.css';
import '../../css/q/qygck_omr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="il_myibjf"/><path class="qygck_omr wm-a"/></g>`,
		"fallback": "withicons:screwdriver",
	});
}

export default Component;
