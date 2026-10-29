import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfzd08f0w.css';
import '../../css/r/ri984nurg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pfzd08f0w"/><path class="ri984nurg"/></g>`,
		"fallback": "withicons:trophy",
	});
}

export default Component;
