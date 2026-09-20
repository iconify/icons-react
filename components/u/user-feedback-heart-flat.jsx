import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/neq1w5biy.css';
import '../../css/d/dmfq79bui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="neq1w5biy"/><path class="dmfq79bui"/></g>`,
		"fallback": "streamline-plump-color:user-feedback-heart-flat",
	});
}

export default Component;
