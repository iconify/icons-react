import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/swrlsub8n.css';
import '../../css/m/mj_6ev9oe.css';
import '../../css/x/x09loybdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="swrlsub8n"/><path class="mj_6ev9oe"/><path class="x09loybdy"/></g>`,
		"fallback": "solar:minimalistic-magnifier-bug-broken",
	});
}

export default Component;
