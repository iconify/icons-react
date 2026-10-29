import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ac10krv4b.css';
import '../../css/y/ycs8tdb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ac10krv4b wm-k"/><path class="wm-s ycs8tdb8p"/></g>`,
		"fallback": "withicons-bauhaus:map-pin-plus",
	});
}

export default Component;
