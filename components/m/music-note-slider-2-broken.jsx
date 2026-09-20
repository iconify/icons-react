import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nog5ftwkf.css';
import '../../css/t/tnljxhbrz.css';
import '../../css/l/lz7c3lbwd.css';
import '../../css/x/xz182l8_o.css';
import '../../css/o/oyil5ebeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nog5ftwkf"/><path class="tnljxhbrz"/><path class="lz7c3lbwd"/><path class="xz182l8_o"/><path class="oyil5ebeb"/></g>`,
		"fallback": "solar:music-note-slider-2-broken",
	});
}

export default Component;
