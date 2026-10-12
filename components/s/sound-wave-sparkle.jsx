import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdmpf3b7w.css';
import '../../css/o/oh88tp68y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdmpf3b7w"/><path class="oh88tp68y"/></g>`,
		"fallback": "andrsrxn:sound-wave-sparkle",
	});
}

export default Component;
