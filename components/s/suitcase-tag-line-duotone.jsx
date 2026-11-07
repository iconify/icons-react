import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k66tt2kvs.css';
import '../../css/w/w5e8dbcrx.css';
import '../../css/k/khpsiybcv.css';
import '../../css/r/r7rok8i4u.css';
import '../../css/i/imw9ldbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k66tt2kvs"/><path class="w5e8dbcrx"/><path class="khpsiybcv"/><path class="r7rok8i4u"/><path class="imw9ldbzq"/></g>`,
		"fallback": "solar:suitcase-tag-line-duotone",
	});
}

export default Component;
