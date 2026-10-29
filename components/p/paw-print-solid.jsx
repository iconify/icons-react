import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/moh9e55sl.css';
import '../../css/u/uzn0zypyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="moh9e55sl"/><path class="uzn0zypyn wm-a"/></g>`,
		"fallback": "withicons:paw-print-solid",
	});
}

export default Component;
