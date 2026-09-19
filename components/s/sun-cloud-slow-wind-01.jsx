import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gk-rq1frw.css';
import '../../css/i/iox6mb34c.css';
import '../../css/w/wt25_kb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gk-rq1frw"/><path class="iox6mb34c"/><path class="wt25_kb-h"/></g>`,
		"fallback": "hugeicons:sun-cloud-slow-wind-01",
	});
}

export default Component;
