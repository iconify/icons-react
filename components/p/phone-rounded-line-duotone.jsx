import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/unca51bwt.css';
import '../../css/r/rtq30sv_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="unca51bwt"/><path class="rtq30sv_p"/></g>`,
		"fallback": "solar:phone-rounded-line-duotone",
	});
}

export default Component;
