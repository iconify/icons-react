import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwbhw0bon.css';
import '../../css/s/seksnhbwh.css';
import '../../css/y/yiumtdr6l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwbhw0bon"/><path class="seksnhbwh"/><path class="yiumtdr6l"/></g>`,
		"fallback": "streamline-color:music-note-2",
	});
}

export default Component;
