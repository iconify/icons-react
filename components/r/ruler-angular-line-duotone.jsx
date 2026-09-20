import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bk50ckbpt.css';
import '../../css/t/t3i0929hw.css';
import '../../css/g/gs7_5ebow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bk50ckbpt"/><path class="t3i0929hw"/><path class="gs7_5ebow"/></g>`,
		"fallback": "solar:ruler-angular-line-duotone",
	});
}

export default Component;
