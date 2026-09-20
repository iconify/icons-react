import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxu79bcge.css';
import '../../css/r/r-0wki63m.css';
import '../../css/w/w_y1z4b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxu79bcge"/><path class="r-0wki63m"/><path class="w_y1z4b0h"/></g>`,
		"fallback": "streamline-freehand-color:messages-people-woman-heart",
	});
}

export default Component;
