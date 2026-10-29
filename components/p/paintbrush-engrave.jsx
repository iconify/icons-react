import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pzh4jacwq.css';
import '../../css/f/fey6353zj.css';
import '../../css/z/zlwfcob2u.css';
import '../../css/x/xr7tqnbdl.css';
import '../../css/z/zkgki1b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pzh4jacwq wm-k"/><path class="fey6353zj wm-a"/><path class="wm-shadow zlwfcob2u"/><path class="wm-k xr7tqnbdl"/><path class="wm-k zkgki1b_n"/></g>`,
		"fallback": "withicons:paintbrush-engrave",
	});
}

export default Component;
