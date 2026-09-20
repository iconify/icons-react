import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wx2_qhbxs.css';
import '../../css/n/ny2yxtbss.css';
import '../../css/t/ta0zdfd_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wx2_qhbxs"/><path class="ny2yxtbss"/><path class="ta0zdfd_y"/></g>`,
		"fallback": "solar:monitor-line-duotone",
	});
}

export default Component;
