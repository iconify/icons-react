import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sfp-qh-hh.css';
import '../../css/x/x74picb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sfp-qh-hh"/><path class="wm-s x74picb7l"/></g>`,
		"fallback": "withicons:moon-star",
	});
}

export default Component;
