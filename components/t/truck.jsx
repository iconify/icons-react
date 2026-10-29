import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n255akb9d.css';
import '../../css/w/wjxdsob9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n255akb9d"/><path class="wjxdsob9d wm-a"/></g>`,
		"fallback": "withicons:truck",
	});
}

export default Component;
