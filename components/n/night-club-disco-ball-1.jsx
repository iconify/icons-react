import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p8b1nhbzm.css';
import '../../css/v/vtmw0kq4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p8b1nhbzm"/><path class="vtmw0kq4q"/></g>`,
		"fallback": "streamline-freehand-color:night-club-disco-ball-1",
	});
}

export default Component;
