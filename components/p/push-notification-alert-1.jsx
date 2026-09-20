import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chez6abod.css';
import '../../css/n/np9eci1td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chez6abod"/><path class="np9eci1td"/></g>`,
		"fallback": "streamline-freehand-color:push-notification-alert-1",
	});
}

export default Component;
