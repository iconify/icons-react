import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zqnwjnvva.css';
import '../../css/s/s1farrbte.css';
import '../../css/l/ltkx6wbhl.css';
import '../../css/w/wrbf2zb1l.css';
import '../../css/x/xgrg7usag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zqnwjnvva"/><path class="s1farrbte wm-a"/><path class="ltkx6wbhl wm-shadow"/><path class="wm-k wrbf2zb1l"/><path class="wm-a xgrg7usag"/></g>`,
		"fallback": "withicons:rotate-cw-engrave",
	});
}

export default Component;
