import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/msp9tkb_i.css';
import '../../css/p/p7a-j7b1k.css';
import '../../css/t/tl8j4-b-t.css';
import '../../css/y/yp_bkzi5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="msp9tkb_i"/><path class="p7a-j7b1k wm-shine"/><path class="tl8j4-b-t wm-k"/><path class="wm-a yp_bkzi5a"/></g>`,
		"fallback": "withicons-kawaii:kalash",
	});
}

export default Component;
