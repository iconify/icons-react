import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t28e6n35j.css';
import '../../css/n/nhvaxdb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t28e6n35j"/><path class="nhvaxdb6u"/></g>`,
		"fallback": "streamline-freehand-color:network-laptop-1",
	});
}

export default Component;
