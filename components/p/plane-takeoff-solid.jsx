import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tzqy-xbjv.css';
import '../../css/i/i0c9eubvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tzqy-xbjv"/><path class="i0c9eubvb wm-a"/></g>`,
		"fallback": "withicons:plane-takeoff-solid",
	});
}

export default Component;
