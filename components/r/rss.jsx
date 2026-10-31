import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q-2zw5bmy.css';
import '../../css/u/umir-lmqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q-2zw5bmy"/><path class="umir-lmqb"/></g>`,
		"fallback": "withicons-retro:rss",
	});
}

export default Component;
