import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ic6ewuzti.css';
import '../../css/z/z0-9n0b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ic6ewuzti"/><path class="z0-9n0b_p"/></g>`,
		"fallback": "streamline-freehand-color:notes-book-1",
	});
}

export default Component;
