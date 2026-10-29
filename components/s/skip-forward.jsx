import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dhuewpeee.css';
import '../../css/b/byf_cebpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dhuewpeee"/><path class="byf_cebpl wm-a"/></g>`,
		"fallback": "withicons:skip-forward",
	});
}

export default Component;
