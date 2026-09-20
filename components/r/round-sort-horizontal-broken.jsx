import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c_dm05blc.css';
import '../../css/a/aq5i5kwsa.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c_dm05blc"/><path class="aq5i5kwsa"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:round-sort-horizontal-broken",
	});
}

export default Component;
