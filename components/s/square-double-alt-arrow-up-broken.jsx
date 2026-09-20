import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j_9f9bbyb.css';
import '../../css/r/rh3f4sbkf.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j_9f9bbyb"/><path class="rh3f4sbkf"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:square-double-alt-arrow-up-broken",
	});
}

export default Component;
