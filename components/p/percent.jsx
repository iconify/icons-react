import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jc0rlpwpy.css';
import '../../css/p/p8jx_hbic.css';
import '../../css/o/oqdxdpjwb.css';
import '../../css/b/bb8vnzh5z.css';
import '../../css/v/vnfkbvmnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jc0rlpwpy"/><path class="p8jx_hbic wm-shine"/><path class="oqdxdpjwb wm-k"/><path class="bb8vnzh5z wm-a"/><path class="vnfkbvmnw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:percent",
	});
}

export default Component;
