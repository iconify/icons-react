import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x9dmxod6m.css';
import '../../css/h/h8xdp30wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="x9dmxod6m"/><path class="h8xdp30wi"/></g>`,
		"fallback": "withicons-bauhaus:send-horizontal",
	});
}

export default Component;
