import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/ts7f3ccvg.css';
import '../../css/s/sf9ffevpn.css';
import '../../css/e/ea2rukt_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ts7f3ccvg"/><path class="sf9ffevpn"/><path class="ea2rukt_d"/></g>`,
		"fallback": "hugeicons:moon-cloud-fast-wind",
	});
}

export default Component;
