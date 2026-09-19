import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r4dz7fbay.css';
import '../../css/r/reozhcb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="r4dz7fbay"/><path class="reozhcb8m"/></g>`,
		"fallback": "gcp:support",
	});
}

export default Component;
