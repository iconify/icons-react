import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y1zim20wu.css';
import '../../css/e/e6q1v-bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y1zim20wu"/><path class="e6q1v-bow"/></g>`,
		"fallback": "feather:pocket",
	});
}

export default Component;
