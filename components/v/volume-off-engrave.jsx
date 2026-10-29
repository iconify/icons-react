import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6jp3jbsz.css';
import '../../css/l/l8c4rkbqx.css';
import '../../css/y/y9npttv3e.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/d/d074ckbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f6jp3jbsz wm-k"/><path class="l8c4rkbqx wm-s"/><path class="wm-shadow y9npttv3e"/><path class="st-oxhb_e wm-k"/><path class="d074ckbgd wm-s"/></g>`,
		"fallback": "withicons:volume-off-engrave",
	});
}

export default Component;
