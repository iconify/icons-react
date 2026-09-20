import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evuq8lbli.css';
import '../../css/o/ozst3gb1r.css';
import '../../css/c/cdghymb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="evuq8lbli"/><circle transform="rotate(-45 8.607 8.879)" class="ozst3gb1r"/><path class="cdghymb9g"/></g>`,
		"fallback": "solar:tag-linear",
	});
}

export default Component;
