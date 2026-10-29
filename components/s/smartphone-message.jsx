import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fjchxib0d.css';
import '../../css/c/c_3xvpb_l.css';
import '../../css/a/a8978jjar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fjchxib0d wm-k"/><path class="c_3xvpb_l wm-s"/><path class="a8978jjar"/></g>`,
		"fallback": "withicons-bauhaus:smartphone-message",
	});
}

export default Component;
