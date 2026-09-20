import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sq6gxsdqc.css';
import '../../css/f/fp701sbwd.css';
import '../../css/f/f-_h6lber.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sq6gxsdqc"/><path clip-rule="evenodd" class="fp701sbwd"/><path class="f-_h6lber"/></g>`,
		"fallback": "streamline-flex-color:landscape-2-flat",
	});
}

export default Component;
