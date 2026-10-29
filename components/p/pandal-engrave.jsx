import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c5j7nx_4h.css';
import '../../css/z/zcxt6z28y.css';
import '../../css/b/bc7ac5byo.css';
import '../../css/q/q2pcvohsl.css';
import '../../css/p/pkkfi_6fi.css';
import '../../css/x/xy8yzjl3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c5j7nx_4h wm-k"/><path class="wm-a zcxt6z28y"/><path class="bc7ac5byo wm-shadow"/><path class="q2pcvohsl wm-k"/><path class="pkkfi_6fi wm-a"/><path class="wm-a xy8yzjl3x"/></g>`,
		"fallback": "withicons:pandal-engrave",
	});
}

export default Component;
