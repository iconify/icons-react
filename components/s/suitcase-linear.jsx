import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k66tt2kvs.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/d/doozq_bcs.css';
import '../../css/t/tcrjdnoua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k66tt2kvs"/><path class="hq-5njbjh"/><path class="doozq_bcs"/><path class="tcrjdnoua"/></g>`,
		"fallback": "solar:suitcase-linear",
	});
}

export default Component;
