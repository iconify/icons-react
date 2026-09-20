import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q2c3u1btc.css';
import '../../css/d/dpidgrb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q2c3u1btc"/><path class="dpidgrb8i"/></g>`,
		"fallback": "keyline-icons:replay-sharp-two-tone",
	});
}

export default Component;
