import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/x/xtutonbhb.css';
import '../../css/m/mj_6ev9oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="r0xhknb7f"/><path class="xtutonbhb"/><path class="mj_6ev9oe"/></g>`,
		"fallback": "solar:minimalistic-magnifier-zoom-in-line-duotone",
	});
}

export default Component;
