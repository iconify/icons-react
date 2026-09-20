import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzt67molh.css';
import '../../css/z/z5g_35ygb.css';
import '../../css/a/aj705ab4l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzt67molh"/><path class="z5g_35ygb"/><path class="aj705ab4l"/></g>`,
		"fallback": "streamline-color:watch-2",
	});
}

export default Component;
