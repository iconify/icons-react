import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/br4_5duwz.css';
import '../../css/m/m50bokr6q.css';
import '../../css/w/wprdp0m6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="br4_5duwz"/><path class="m50bokr6q"/><path class="wprdp0m6y"/></g>`,
		"fallback": "solar:playback-speed-broken",
	});
}

export default Component;
