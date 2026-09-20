import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mh_p07tck.css';
import '../../css/a/awh7gcbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mh_p07tck"/><path class="awh7gcbdl"/></g>`,
		"fallback": "solar:rewind-forward-broken",
	});
}

export default Component;
