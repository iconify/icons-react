import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oxhmej08u.css';
import '../../css/u/utticpb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oxhmej08u"/><path class="utticpb4l"/></g>`,
		"fallback": "hugeicons:paypal",
	});
}

export default Component;
