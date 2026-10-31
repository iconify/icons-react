import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w2ox8ubgy.css';
import '../../css/y/y6yluckxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w2ox8ubgy"/><path class="y6yluckxq"/></g>`,
		"fallback": "withicons-retro:text-cursor",
	});
}

export default Component;
