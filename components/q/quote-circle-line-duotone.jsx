import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/h/hehtuux8b.css';
import '../../css/f/fvum_ub3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l80i0rb1m"/><path class="hehtuux8b"/><path class="fvum_ub3p"/></g>`,
		"fallback": "solar:quote-circle-line-duotone",
	});
}

export default Component;
