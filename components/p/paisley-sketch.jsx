import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yd-40xbpd.css';
import '../../css/g/gt4wshb-r.css';
import '../../css/b/bmi4u2bke.css';
import '../../css/l/lz3_99bxh.css';
import '../../css/r/rg78pebrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yd-40xbpd"/><path class="gt4wshb-r wm-a"/><path class="bmi4u2bke wm-k"/><path class="lz3_99bxh wm-a"/><path class="rg78pebrd wm-s"/></g>`,
		"fallback": "withicons:paisley-sketch",
	});
}

export default Component;
