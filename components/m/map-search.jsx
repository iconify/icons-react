import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3_x__w1q.css';
import '../../css/r/rgzwgmtyr.css';
import '../../css/v/vtv2khrfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f3_x__w1q"/><path class="rgzwgmtyr"/><path class="vtv2khrfh"/></g>`,
		"fallback": "andrsrxn:map-search",
	});
}

export default Component;
