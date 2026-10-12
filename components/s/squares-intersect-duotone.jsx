import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5ymcabpn.css';
import '../../css/r/rkqb1nq9h.css';
import '../../css/w/wdpg8g0zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5ymcabpn"/><path class="rkqb1nq9h"/><path class="wdpg8g0zd"/></g>`,
		"fallback": "lucide-extended:squares-intersect-duotone",
	});
}

export default Component;
