import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vncs1mbed.css';
import '../../css/d/d5oleed0c.css';
import '../../css/s/s5nsjsdgp.css';
import '../../css/p/pk133wbwu.css';
import '../../css/d/d85wtyayf.css';
import '../../css/c/cfl3_9b4r.css';
import '../../css/j/js5h9bc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vncs1mbed"/><path class="d5oleed0c"/><path class="s5nsjsdgp"/><path class="pk133wbwu"/><path class="d85wtyayf"/><path class="cfl3_9b4r"/><path class="js5h9bc7i"/></g>`,
		"fallback": "solar:video-frame-play-horizontal-broken",
	});
}

export default Component;
