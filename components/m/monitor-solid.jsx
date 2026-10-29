import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/waur2e7vh.css';
import '../../css/c/ca41k3b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="waur2e7vh"/><path class="ca41k3b-d wm-a"/></g>`,
		"fallback": "withicons:monitor-solid",
	});
}

export default Component;
