import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m38bw1tog.css';
import '../../css/q/qtb6v8bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m38bw1tog wm-k"/><path class="qtb6v8bcu wm-a"/></g>`,
		"fallback": "withicons:thermometer-sun-gloss",
	});
}

export default Component;
