import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doy9q4b5f.css';
import '../../css/f/fa7lsebpo.css';
import '../../css/q/qsgur_bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="fa7lsebpo"/><path class="qsgur_bab"/></g>`,
		"fallback": "solar:round-sort-vertical-line-duotone",
	});
}

export default Component;
