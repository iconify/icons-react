import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnlvi24oi.css';
import '../../css/y/y0z7j_pbk.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnlvi24oi"/><path class="y0z7j_pbk"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:maximize-square-2-line-duotone",
	});
}

export default Component;
