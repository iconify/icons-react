import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/br4_5duwz.css';
import '../../css/n/n5cix9iyo.css';
import '../../css/n/nssu5butl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="br4_5duwz"/><path class="n5cix9iyo"/><path class="nssu5butl"/></g>`,
		"fallback": "solar:playback-speed-line-duotone",
	});
}

export default Component;
