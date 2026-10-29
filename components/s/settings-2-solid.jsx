import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fwwjk76vy.css';
import '../../css/w/w2-qgvztk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fwwjk76vy"/><path class="w2-qgvztk wm-a"/></g>`,
		"fallback": "withicons:settings-2-solid",
	});
}

export default Component;
