import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9iiohb0l.css';
import '../../css/s/sl9eks9ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o9iiohb0l"/><path class="sl9eks9ly"/></g>`,
		"fallback": "andrsrxn:pilcrow",
	});
}

export default Component;
