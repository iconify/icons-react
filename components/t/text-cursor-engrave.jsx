import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r5mektlfq.css';
import '../../css/r/rbdzf6jdj.css';
import '../../css/h/hj1vp_b7b.css';
import '../../css/o/oe-98mb0w.css';
import '../../css/m/m5ytp9bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r5mektlfq wm-k"/><path class="rbdzf6jdj wm-a"/><path class="hj1vp_b7b wm-shadow"/><path class="oe-98mb0w wm-k"/><path class="m5ytp9bms wm-a"/></g>`,
		"fallback": "withicons:text-cursor-engrave",
	});
}

export default Component;
