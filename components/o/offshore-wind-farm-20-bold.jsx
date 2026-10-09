import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk6ndnb1r.css';
import '../../css/v/vrg27460m.css';
import '../../css/w/wfb1t0b7c.css';
import '../../css/i/in04pmbnh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk6ndnb1r"/><path class="vrg27460m"/><path class="wfb1t0b7c"/><path class="in04pmbnh"/>`,
		"fallback": "energy-icons:offshore-wind-farm-20-bold",
	});
}

export default Component;
