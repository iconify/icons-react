import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tc6nfibcu.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/j/jmn44onlx.css';
import '../../css/w/wy63pibnm.css';
import '../../css/w/wu6h5cbil.css';
import '../../css/s/sqxfocc0h.css';
import '../../css/l/lqjkhsbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tc6nfibcu"/><path class="ktpncgb0v"/><path class="jmn44onlx"/><path class="wy63pibnm"/><path class="wu6h5cbil"/><path class="sqxfocc0h"/><path class="lqjkhsbgy"/></g>`,
		"fallback": "solar:subtitles-broken",
	});
}

export default Component;
