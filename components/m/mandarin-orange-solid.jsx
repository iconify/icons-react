import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fg-3ctk7x.css';
import '../../css/u/u252acb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fg-3ctk7x"/><path class="u252acb1c wm-a"/></g>`,
		"fallback": "withicons:mandarin-orange-solid",
	});
}

export default Component;
