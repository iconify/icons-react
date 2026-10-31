import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r8dch0bwy.css';
import '../../css/k/klylembgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r8dch0bwy"/><path class="klylembgj"/></g>`,
		"fallback": "withicons-retro:italic",
	});
}

export default Component;
