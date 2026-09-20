import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okywmxbyf.css';
import '../../css/n/nfhr_9b_t.css';
import '../../css/n/nasz79b5q.css';
import '../../css/v/v_sx9pb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="okywmxbyf"/><path class="nfhr_9b_t"/><path class="nasz79b5q"/><path class="v_sx9pb9r"/></g>`,
		"fallback": "streamline-ultimate-color:mouse-smart",
	});
}

export default Component;
