import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kt4uqhbit.css';
import '../../css/s/syd1xccyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kt4uqhbit"/><path class="syd1xccyr wm-a"/></g>`,
		"fallback": "withicons:timer-reset-solid",
	});
}

export default Component;
