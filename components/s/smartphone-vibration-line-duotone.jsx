import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/i/iwzbdbrcw.css';
import '../../css/u/uh1sxf1kh.css';
import '../../css/j/jm518nbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="iwzbdbrcw"/><path class="uh1sxf1kh"/><path class="jm518nbhy"/></g>`,
		"fallback": "solar:smartphone-vibration-line-duotone",
	});
}

export default Component;
