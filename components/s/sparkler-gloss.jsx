import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f2jvjxbna.css';
import '../../css/h/hj4u-fdzu.css';
import '../../css/i/ixxoxcb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f2jvjxbna wm-k"/><path class="hj4u-fdzu wm-a"/><path class="ixxoxcb0x wm-s"/></g>`,
		"fallback": "withicons:sparkler-gloss",
	});
}

export default Component;
