import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1_ei2byc.css';
import '../../css/y/ylm31-b0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y1_ei2byc"/><path clip-rule="evenodd" class="ylm31-b0g"/></g>`,
		"fallback": "streamline-color:invisible-1-flat",
	});
}

export default Component;
