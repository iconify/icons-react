import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hoddqs61x.css';
import '../../css/e/exrjse-wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hoddqs61x"/><path class="exrjse-wb"/></g>`,
		"fallback": "withicons-retro:parentheses",
	});
}

export default Component;
