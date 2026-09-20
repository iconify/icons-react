import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi79qknjq.css';
import '../../css/t/t22r7x1ib.css';
import '../../css/b/bpia10usa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mi79qknjq"/><rect class="t22r7x1ib"/><rect class="bpia10usa"/></g>`,
		"fallback": "lets-icons:suitcase",
	});
}

export default Component;
