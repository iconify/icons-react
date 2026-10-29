import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x8enjjbsq.css';
import '../../css/x/xvcz328vn.css';
import '../../css/p/p3hd9ubtl.css';
import '../../css/o/ov_robb3s.css';
import '../../css/y/y875pzbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x8enjjbsq"/><path class="wm-a xvcz328vn"/><path class="p3hd9ubtl wm-shadow"/><path class="ov_robb3s wm-k"/><path class="wm-a y875pzbpu"/></g>`,
		"fallback": "withicons:link-2-engrave",
	});
}

export default Component;
