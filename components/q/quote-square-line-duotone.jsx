import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hehtuux8b.css';
import '../../css/f/fvum_ub3p.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hehtuux8b"/><path class="fvum_ub3p"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:quote-square-line-duotone",
	});
}

export default Component;
