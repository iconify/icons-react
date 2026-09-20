import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqmutlbdi.css';
import '../../css/v/vujnbubvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqmutlbdi"/><path class="vujnbubvw"/></g>`,
		"fallback": "streamline-freehand-color:time-hourglass-triangle",
	});
}

export default Component;
