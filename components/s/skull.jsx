import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tjbgnmb3g.css';
import '../../css/y/yzbkkhbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tjbgnmb3g"/><path class="wm-a yzbkkhbwo"/></g>`,
		"fallback": "withicons:skull",
	});
}

export default Component;
