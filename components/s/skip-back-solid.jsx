import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dc9gydbdz.css';
import '../../css/p/p_9q2hbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dc9gydbdz"/><path class="p_9q2hbej wm-a"/></g>`,
		"fallback": "withicons:skip-back-solid",
	});
}

export default Component;
