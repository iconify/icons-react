import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lennyzbya.css';
import '../../css/g/gv_aam95c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lennyzbya"/><path class="gv_aam95c"/></g>`,
		"fallback": "solar:videocamera-linear",
	});
}

export default Component;
