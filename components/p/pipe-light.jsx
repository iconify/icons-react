import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bypvkgbqj.css';
import '../../css/g/g5q7j2twl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bypvkgbqj"/><path class="g5q7j2twl"/></g>`,
		"fallback": "lets-icons:pipe-light",
	});
}

export default Component;
