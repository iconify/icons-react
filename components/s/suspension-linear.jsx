import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j601zwbbx.css';
import '../../css/e/eupf27bpo.css';
import '../../css/i/iredkutyw.css';
import '../../css/w/wtl2pobdd.css';
import '../../css/p/psheptbge.css';
import '../../css/p/p486gvbkz.css';
import '../../css/p/p1vtxdqvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j601zwbbx"/><path class="eupf27bpo"/><path class="iredkutyw"/><path class="wtl2pobdd"/><path class="psheptbge"/><path class="p486gvbkz"/><path class="p1vtxdqvn"/></g>`,
		"fallback": "solar:suspension-linear",
	});
}

export default Component;
