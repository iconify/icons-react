import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/k/kjxg36b_m.css';
import '../../css/x/xtutonbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="r0xhknb7f"/><path class="kjxg36b_m"/><path class="xtutonbhb"/></g>`,
		"fallback": "solar:magnifier-zoom-in-line-duotone",
	});
}

export default Component;
