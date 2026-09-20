import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sleizizdy.css';
import '../../css/u/u43fgobpl.css';
import '../../css/d/dtd56ubxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sleizizdy"/><rect class="u43fgobpl"/><path class="dtd56ubxf"/></g>`,
		"fallback": "solar:turntable-line-duotone",
	});
}

export default Component;
