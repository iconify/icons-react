import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/f/fub8u0bsr.css';
import '../../css/q/q9lv46bbv.css';
import '../../css/u/utbx9q75k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="fub8u0bsr"/><path class="q9lv46bbv"/><path class="utbx9q75k"/></g>`,
		"fallback": "solar:list-up-minimalistic-line-duotone",
	});
}

export default Component;
