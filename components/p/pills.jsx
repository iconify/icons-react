import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipm_x9bqq.css';
import '../../css/k/kzycwm8wn.css';
import '../../css/w/wrdvgsnvo.css';
import '../../css/f/fd6hx_eja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-16.058 55.576 -3.15)skewX(-.252)" class="ipm_x9bqq"/><rect transform="matrix(-.96098 -.27661 -.27239 .96219 21.01 9.86)" class="kzycwm8wn"/><rect transform="rotate(-16.058 29.662 .388)skewX(-.252)" class="wrdvgsnvo"/><rect transform="matrix(-.96098 -.27661 -.27239 .96219 23 2.83)" class="wrdvgsnvo"/><path class="fd6hx_eja"/></g>`,
		"fallback": "andrsrxn:pills",
	});
}

export default Component;
