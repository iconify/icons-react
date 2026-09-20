import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7psxub_u.css';
import '../../css/h/h7jtw2b3w.css';
import '../../css/d/dq2-7yb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n7psxub_u"/><path class="h7jtw2b3w"/><path class="dq2-7yb4u"/></g>`,
		"fallback": "lets-icons:road-finish-fill",
	});
}

export default Component;
