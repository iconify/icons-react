import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i8x5r5b6y.css';
import '../../css/k/ktsdmackl.css';
import '../../css/z/z5r66k4dx.css';
import '../../css/g/glvepwqcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i8x5r5b6y wm-shadow"/><path class="ktsdmackl"/><path class="z5r66k4dx"/><path class="glvepwqcj"/></g>`,
		"fallback": "withicons-retro:soup",
	});
}

export default Component;
