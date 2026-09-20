import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/l/ltv65kn9y.css';
import '../../css/b/b-g-ugb8y.css';
import '../../css/b/b8vre53kw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/l/l_ulzsdje.css';
import '../../css/l/lu2x-n83s.css';
import '../../css/z/zezq_hbne.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="ltv65kn9y"/><path class="b-g-ugb8y"/><path class="b8vre53kw"/></g><g class="brzn_0bpr"><path class="l_ulzsdje"/><circle class="lu2x-n83s"/><path class="zezq_hbne"/></g>`,
		"fallback": "openmoji:man-golfing",
	});
}

export default Component;
