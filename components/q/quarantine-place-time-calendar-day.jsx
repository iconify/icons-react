import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d_1ye01hx.css';
import '../../css/f/ftkinpb2n.css';
import '../../css/k/kl1a29hva.css';
import '../../css/o/o0sb5acud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="d_1ye01hx"/><path class="ftkinpb2n"/><path class="kl1a29hva"/><path class="o0sb5acud"/></g>`,
		"fallback": "covid:quarantine-place-time-calendar-day",
	});
}

export default Component;
