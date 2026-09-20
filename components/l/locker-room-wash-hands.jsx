import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/ml9vscc8q.css';
import '../../css/i/iwxpr45qa.css';
import '../../css/k/k2yb2obuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ml9vscc8q"/><path class="iwxpr45qa"/><path class="k2yb2obuz"/></g>`,
		"fallback": "streamline-freehand-color:locker-room-wash-hands",
	});
}

export default Component;
