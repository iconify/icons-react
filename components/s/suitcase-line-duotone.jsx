import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k66tt2kvs.css';
import '../../css/w/w5e8dbcrx.css';
import '../../css/k/k7ejikbjh.css';
import '../../css/g/gq-j8n_ld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k66tt2kvs"/><path class="w5e8dbcrx"/><path class="k7ejikbjh"/><path class="gq-j8n_ld"/></g>`,
		"fallback": "solar:suitcase-line-duotone",
	});
}

export default Component;
