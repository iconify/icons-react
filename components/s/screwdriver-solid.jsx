import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m15vzm5ke.css';
import '../../css/x/xhpv1945y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m15vzm5ke"/><path class="wm-a xhpv1945y"/></g>`,
		"fallback": "withicons:screwdriver-solid",
	});
}

export default Component;
