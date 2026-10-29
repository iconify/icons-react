import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bf1x81e-m.css';
import '../../css/i/icagbhbcb.css';
import '../../css/e/eq8k4cc-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bf1x81e-m wm-k"/><path class="icagbhbcb wm-a"/><path class="eq8k4cc-q"/></g>`,
		"fallback": "withicons-bauhaus:thandai",
	});
}

export default Component;
