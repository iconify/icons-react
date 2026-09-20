import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wz3h84b3q.css';
import '../../css/o/oivh7nbtd.css';
import '../../css/x/xm-axabdm.css';
import '../../css/m/mieg0m98o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wz3h84b3q"/><path class="oivh7nbtd"/><path class="xm-axabdm"/><path class="mieg0m98o"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-rotate-vertical",
	});
}

export default Component;
