import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uxuqlo1po.css';
import '../../css/s/sq_axr2cd.css';
import '../../css/q/qbtperb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uxuqlo1po"/><path class="sq_axr2cd wm-shadow"/><path class="qbtperb_f"/></g>`,
		"fallback": "withicons:navigation-engrave",
	});
}

export default Component;
