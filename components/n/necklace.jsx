import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oj79fp0oa.css';
import '../../css/f/fr4pg2b_d.css';
import '../../css/o/ojke_mb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oj79fp0oa"/><path class="fr4pg2b_d"/><path class="ojke_mb9w"/></g>`,
		"fallback": "hugeicons:necklace",
	});
}

export default Component;
