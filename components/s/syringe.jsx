import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0zt8sbru.css';
import '../../css/x/xp6htkbjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0zt8sbru"/><path class="xp6htkbjh"/></g>`,
		"fallback": "streamline-color:syringe",
	});
}

export default Component;
