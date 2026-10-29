import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c6_p4vb3r.css';
import '../../css/m/m03t0sb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c6_p4vb3r wm-k"/><path class="m03t0sb5w wm-s"/></g>`,
		"fallback": "withicons-bauhaus:phone-forwarded",
	});
}

export default Component;
