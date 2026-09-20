import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sio6vka1s.css';
import '../../css/t/tyaij6rok.css';
import '../../css/v/vy5waob-q.css';
import '../../css/u/u3xw_g32v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sio6vka1s"/><path class="tyaij6rok"/><path class="vy5waob-q"/><path class="u3xw_g32v"/></g>`,
		"fallback": "solar:remote-controller-minimalistic-broken",
	});
}

export default Component;
