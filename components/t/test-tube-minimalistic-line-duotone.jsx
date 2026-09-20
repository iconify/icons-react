import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l85ba_bnq.css';
import '../../css/o/oys0tib_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l85ba_bnq"/><path class="oys0tib_h"/></g>`,
		"fallback": "solar:test-tube-minimalistic-line-duotone",
	});
}

export default Component;
