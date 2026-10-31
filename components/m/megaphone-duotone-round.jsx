import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7d5gfb4q.css';
import '../../css/j/jtg1620ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7d5gfb4q"/><path class="jtg1620ro"/></g>`,
		"fallback": "coolicons:megaphone-duotone-round",
	});
}

export default Component;
