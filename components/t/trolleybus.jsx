import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcexy6_gl.css';
import '../../css/h/h1qn_f5_p.css';
import '../../css/m/mng7wpk2x.css';
import '../../css/u/u89oeuf8g.css';
import '../../css/m/m3dh3qbkq.css';
import '../../css/s/sg0qhqxoc.css';
import '../../css/i/i0tr0cbzh.css';
import '../../css/k/km5m0gbeq.css';
import '../../css/u/ufstvobyr.css';
import '../../css/l/lt5i2gh6g.css';
import '../../css/a/ahtef3btz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcexy6_gl"/><path class="h1qn_f5_p"/><path class="mng7wpk2x"/><path class="u89oeuf8g"/><path class="m3dh3qbkq"/><path class="sg0qhqxoc"/><path class="i0tr0cbzh"/><path class="km5m0gbeq"/><path class="ufstvobyr"/><path class="lt5i2gh6g"/><path class="ahtef3btz"/>`,
		"fallback": "fxemoji:trolleybus",
	});
}

export default Component;
