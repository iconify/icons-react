import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmfhugg_x.css';
import '../../css/m/m6mj_obaa.css';
import '../../css/f/fn8tddcxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmfhugg_x"/><path class="m6mj_obaa"/><path class="fn8tddcxs"/></g>`,
		"fallback": "lucide-extended:thermometer-sun-duotone",
	});
}

export default Component;
