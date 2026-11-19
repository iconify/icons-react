import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0mdybc4q.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/j/j5iua7_wm.css';
import '../../css/r/rhn6d9t-j.css';
import '../../css/v/vtd_xknio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q0mdybc4q"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="j5iua7_wm"/><circle class="rhn6d9t-j"/><path class="vtd_xknio"/></g>`,
		"fallback": "andrsrxn:money-clock",
	});
}

export default Component;
