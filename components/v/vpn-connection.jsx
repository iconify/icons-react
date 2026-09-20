import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9sy-eb5q.css';
import '../../css/b/beg61_b1x.css';
import '../../css/v/vg4-x780p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q9sy-eb5q"/><path class="beg61_b1x"/><path class="vg4-x780p"/></g>`,
		"fallback": "streamline-flex-color:vpn-connection",
	});
}

export default Component;
