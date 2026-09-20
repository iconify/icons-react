import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qla11mbwj.css';
import '../../css/u/urivbcc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qla11mbwj"/><path class="urivbcc8b"/></g>`,
		"fallback": "solar:music-notes-bold",
	});
}

export default Component;
