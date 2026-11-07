import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lxnzn9nmw.css';
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
		"content": `<g class="ipq1z-bjh"><path class="lxnzn9nmw"/><path class="fa7lsebpo"/><path class="qsgur_bab"/></g>`,
		"fallback": "solar:square-sort-vertical-line-duotone",
	});
}

export default Component;
