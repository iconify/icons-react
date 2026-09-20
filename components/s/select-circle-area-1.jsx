import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2umeba-b.css';
import '../../css/q/q8ad7lbeg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2umeba-b"/><path class="q8ad7lbeg"/></g>`,
		"fallback": "streamline-color:select-circle-area-1",
	});
}

export default Component;
