import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vu5pypbez.css';
import '../../css/o/o0l2ngovi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vu5pypbez"/><path class="o0l2ngovi"/></g>`,
		"fallback": "streamline-color:pentagon",
	});
}

export default Component;
