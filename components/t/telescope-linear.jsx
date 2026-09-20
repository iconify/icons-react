import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pxc0ebrta.css';
import '../../css/b/bl6ucdcay.css';
import '../../css/s/sqndjhubq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pxc0ebrta"/><path class="bl6ucdcay"/><path class="sqndjhubq"/></g>`,
		"fallback": "solar:telescope-linear",
	});
}

export default Component;
