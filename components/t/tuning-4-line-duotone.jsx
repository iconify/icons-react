import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uor89vbsf.css';
import '../../css/g/gtac9dspq.css';
import '../../css/v/vqm0q2-3k.css';
import '../../css/r/rvvdz1ees.css';
import '../../css/b/bhzit2a0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uor89vbsf"/><path class="gtac9dspq"/><path class="vqm0q2-3k"/><path class="rvvdz1ees"/><path class="bhzit2a0k"/></g>`,
		"fallback": "solar:tuning-4-line-duotone",
	});
}

export default Component;
