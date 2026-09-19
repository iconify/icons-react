import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdifyht3j.css';
import '../../css/h/h_y7jrslp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rdifyht3j"/><path class="h_y7jrslp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-police-officer",
	});
}

export default Component;
