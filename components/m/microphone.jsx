import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5u58_1gl.css';
import '../../css/u/u63bkuz8q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p5u58_1gl"/><path class="u63bkuz8q"/></g>`,
		"fallback": "at-icons:microphone",
	});
}

export default Component;
