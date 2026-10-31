import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oasmk0wij.css';
import '../../css/r/rhcei-4xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oasmk0wij"/><path class="rhcei-4xn"/></g>`,
		"fallback": "withicons-retro:paperclip",
	});
}

export default Component;
