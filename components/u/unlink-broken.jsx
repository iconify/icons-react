import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oezaxpo8x.css';
import '../../css/g/gfk6kebjy.css';
import '../../css/v/vvptc81kx.css';
import '../../css/e/ecdea3xxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oezaxpo8x"/><path class="gfk6kebjy"/><path class="vvptc81kx"/><path class="ecdea3xxa"/></g>`,
		"fallback": "solar:unlink-broken",
	});
}

export default Component;
