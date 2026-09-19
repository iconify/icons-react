import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8n2fmv3x.css';
import '../../css/k/kw_evg14q.css';
import '../../css/t/tpurk853y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t8n2fmv3x"/><path class="kw_evg14q"/><path class="tpurk853y"/></g>`,
		"fallback": "hugeicons:restore-bin",
	});
}

export default Component;
