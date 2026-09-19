import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q4hc5kbiu.css';
import '../../css/k/ku-wnccdo.css';
import '../../css/m/m6k93ubvn.css';
import '../../css/u/u4agv6btr.css';
import '../../css/o/ogughjbsm.css';
import '../../css/v/vysxrcb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q4hc5kbiu"/><path class="ku-wnccdo"/><path class="m6k93ubvn"/><path class="u4agv6btr"/><path class="ogughjbsm"/><path class="vysxrcb6o"/></g>`,
		"fallback": "hugeicons:twin-tower",
	});
}

export default Component;
