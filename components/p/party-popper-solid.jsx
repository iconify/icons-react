import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h4xle3ybm.css';
import '../../css/s/sxbuhbv5x.css';
import '../../css/p/p9w24jbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h4xle3ybm"/><path class="sxbuhbv5x wm-a"/><path class="p9w24jbuo wm-s"/></g>`,
		"fallback": "withicons:party-popper-solid",
	});
}

export default Component;
