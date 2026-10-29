import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/beubtdelq.css';
import '../../css/t/tczyniu7p.css';
import '../../css/m/mp3tf_c2z.css';
import '../../css/t/ti7s0kwlh.css';
import '../../css/c/cft-n96oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="beubtdelq wm-k"/><path class="tczyniu7p wm-a"/><path class="mp3tf_c2z wm-shadow"/><path class="ti7s0kwlh wm-k"/><path class="cft-n96oy wm-a"/></g>`,
		"fallback": "withicons:video-call-engrave",
	});
}

export default Component;
