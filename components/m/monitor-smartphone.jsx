import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e88n4oijh.css';
import '../../css/f/f-k5oeq-j.css';
import '../../css/w/w3r45wbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e88n4oijh"/><path class="f-k5oeq-j wm-a"/><path class="w3r45wbbs wm-s"/></g>`,
		"fallback": "withicons:monitor-smartphone",
	});
}

export default Component;
