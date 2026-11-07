import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kruqtab-m.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/r/ros5bvrws.css';
import '../../css/j/j6-r-u5ao.css';
import '../../css/m/mttyngb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kruqtab-m"/><path class="x-1lf64uh"/><path class="ros5bvrws"/><path class="j6-r-u5ao"/><path class="mttyngb9y"/></g>`,
		"fallback": "solar:scanner-2-broken",
	});
}

export default Component;
