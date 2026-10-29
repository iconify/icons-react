import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qfyrtl21u.css';
import '../../css/s/sbwhit78e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qfyrtl21u"/><path class="sbwhit78e wm-a"/></g>`,
		"fallback": "withicons:sun-solid",
	});
}

export default Component;
