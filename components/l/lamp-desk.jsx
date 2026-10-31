import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sxdgd-ahl.css';
import '../../css/z/zexbz509t.css';
import '../../css/a/ali3yym2p.css';
import '../../css/h/h8f0cde5s.css';
import '../../css/z/zt0yzob2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sxdgd-ahl wm-shadow"/><path class="zexbz509t"/><path class="ali3yym2p"/><path class="h8f0cde5s"/><path class="zt0yzob2o"/></g>`,
		"fallback": "withicons-retro:lamp-desk",
	});
}

export default Component;
