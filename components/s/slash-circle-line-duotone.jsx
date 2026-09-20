import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hkxdjtygn.css';
import '../../css/d/doy9q4b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hkxdjtygn"/><circle class="doy9q4b5f"/></g>`,
		"fallback": "solar:slash-circle-line-duotone",
	});
}

export default Component;
