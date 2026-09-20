import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kyrp_cbyr.css';
import '../../css/u/uk7z4vhel.css';
import '../../css/e/e48ledu_g.css';
import '../../css/k/k6sgsiwcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kyrp_cbyr"/><path class="uk7z4vhel"/><path class="e48ledu_g"/><path class="k6sgsiwcv"/></g>`,
		"fallback": "solar:plate-line-duotone",
	});
}

export default Component;
