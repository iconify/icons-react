import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crnwivglc.css';
import '../../css/t/tvip5acsj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="crnwivglc"/><path class="tvip5acsj"/></g>`,
		"fallback": "rivet-icons:microphone",
	});
}

export default Component;
