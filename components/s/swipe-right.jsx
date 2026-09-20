import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k16gslnbh.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/x/x2mzvccjn.css';
import '../../css/x/x5he41b0p.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/p/p0fbur0-y.css';
import '../../css/p/pfwgd28ig.css';
import '../../css/w/wo730-dxl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k16gslnbh"/><g class="x4u8pbwjc"><path class="x2mzvccjn"/><path class="x5he41b0p"/></g><g class="hzhb0bcwn"><path class="p0fbur0-y"/><path class="pfwgd28ig"/><path class="wo730-dxl"/></g>`,
		"fallback": "openmoji:swipe-right",
	});
}

export default Component;
