import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7lyvxr_x.css';
import '../../css/d/daxkvlbui.css';
import '../../css/l/lott_xlgw.css';
import '../../css/w/w1hie5dyf.css';
import '../../css/z/zak1u-b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n7lyvxr_x wm-k"/><path class="daxkvlbui wm-a"/><path class="lott_xlgw wm-shadow"/><path class="w1hie5dyf wm-k"/><path class="wm-a zak1u-b3y"/></g>`,
		"fallback": "withicons:variable-engrave",
	});
}

export default Component;
