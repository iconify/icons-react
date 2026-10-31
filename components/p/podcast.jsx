import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nlwj_lbwa.css';
import '../../css/j/jdn-0rb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nlwj_lbwa"/><path class="jdn-0rb3l"/></g>`,
		"fallback": "withicons-retro:podcast",
	});
}

export default Component;
