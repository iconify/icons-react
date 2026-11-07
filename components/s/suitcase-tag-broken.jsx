import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/k/khpsiybcv.css';
import '../../css/f/fbw3i1bgm.css';
import '../../css/o/o9av8zbgg.css';
import '../../css/e/ebr-_j5mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hq-5njbjh"/><path class="khpsiybcv"/><path class="fbw3i1bgm"/><path class="o9av8zbgg"/><path class="ebr-_j5mg"/></g>`,
		"fallback": "solar:suitcase-tag-broken",
	});
}

export default Component;
