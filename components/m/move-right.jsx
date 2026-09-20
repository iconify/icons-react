import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wto30ebrs.css';
import '../../css/w/w8wk_mbad.css';
import '../../css/h/h6vz9unec.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wto30ebrs"/><path class="w8wk_mbad"/><path class="h6vz9unec"/></g>`,
		"fallback": "streamline-color:move-right",
	});
}

export default Component;
