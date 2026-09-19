import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c_kplcszs.css';
import '../../css/v/vfymv3unk.css';
import '../../css/q/qsz9j-v2y.css';
import '../../css/t/td1hxgbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c_kplcszs"/><path class="vfymv3unk"/><path class="qsz9j-v2y"/><path class="td1hxgbap"/></g>`,
		"fallback": "hugeicons:monster",
	});
}

export default Component;
