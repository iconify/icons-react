import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hi3_m6-9s.css';
import '../../css/m/mv80occcc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hi3_m6-9s"/><path clip-rule="evenodd" class="mv80occcc"/></g>`,
		"fallback": "streamline-color:waving-hand-flat",
	});
}

export default Component;
