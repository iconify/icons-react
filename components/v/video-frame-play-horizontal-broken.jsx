import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vncs1mbed.css';
import '../../css/d/d5oleed0c.css';
import '../../css/o/oyfge7bbq.css';
import '../../css/s/smner8-3c.css';
import '../../css/j/jrof3sbiu.css';
import '../../css/x/xiwqv5b8r.css';
import '../../css/e/eje-07bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vncs1mbed"/><path class="d5oleed0c"/><path class="oyfge7bbq"/><path class="smner8-3c"/><path class="jrof3sbiu"/><path class="xiwqv5b8r"/><path class="eje-07bby"/></g>`,
		"fallback": "solar:video-frame-play-horizontal-broken",
	});
}

export default Component;
