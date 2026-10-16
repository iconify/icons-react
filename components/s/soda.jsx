import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9149ht4q.css';
import '../../css/c/c5gammbcq.css';
import '../../css/g/g4yc_acbs.css';
import '../../css/d/dd735ebkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9149ht4q"/><path class="c5gammbcq"/><path class="g4yc_acbs"/><path class="dd735ebkt"/></g>`,
		"fallback": "andrsrxn:soda",
	});
}

export default Component;
