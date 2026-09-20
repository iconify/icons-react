import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_hms_btq.css';
import '../../css/m/m7e88o65b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_hms_btq"/><path class="m7e88o65b"/></g>`,
		"fallback": "streamline-color:visible-flat",
	});
}

export default Component;
