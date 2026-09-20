import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtx0s6u8w.css';
import '../../css/g/g47ib-b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xtx0s6u8w"/><path class="g47ib-b7o"/></g>`,
		"fallback": "solar:planet-linear",
	});
}

export default Component;
