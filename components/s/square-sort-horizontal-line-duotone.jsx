import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/c/c_dm05blc.css';
import '../../css/a/aq5i5kwsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="c_dm05blc"/><path class="aq5i5kwsa"/></g>`,
		"fallback": "solar:square-sort-horizontal-line-duotone",
	});
}

export default Component;
