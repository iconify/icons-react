import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kofd9acei.css';
import '../../css/j/j8g5tmb9j.css';
import '../../css/g/gjwz5zrpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kofd9acei"/><path class="j8g5tmb9j"/><path class="gjwz5zrpo"/></g>`,
		"fallback": "streamline-freehand-color:light-spotlight-1",
	});
}

export default Component;
