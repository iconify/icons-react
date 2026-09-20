import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oacms1bzt.css';
import '../../css/i/irz3libwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oacms1bzt"/><path class="irz3libwc"/></g>`,
		"fallback": "solar:map-point-remove-linear",
	});
}

export default Component;
