import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yeouzeolq.css';
import '../../css/m/mx6glt-_b.css';
import '../../css/h/hyx065bvb.css';
import '../../css/d/duf5upbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yeouzeolq"/><path class="mx6glt-_b wm-a"/><path class="hyx065bvb wm-k"/><path class="duf5upbxl wm-a"/></g>`,
		"fallback": "withicons:presentation-sketch",
	});
}

export default Component;
