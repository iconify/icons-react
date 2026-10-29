import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/frsup1bzk.css';
import '../../css/n/n5a7qlyhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="frsup1bzk"/><path class="n5a7qlyhu wm-a"/></g>`,
		"fallback": "withicons:router",
	});
}

export default Component;
