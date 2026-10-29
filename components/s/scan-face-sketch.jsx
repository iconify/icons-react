import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vvxb3xb7h.css';
import '../../css/l/l8c6jtbnt.css';
import '../../css/m/mw8pgwbuy.css';
import '../../css/u/urt9xzh-z.css';
import '../../css/f/fj9ql-fmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vvxb3xb7h"/><path class="l8c6jtbnt wm-k"/><path class="mw8pgwbuy wm-a"/><path class="urt9xzh-z wm-k"/><path class="fj9ql-fmu wm-a"/></g>`,
		"fallback": "withicons:scan-face-sketch",
	});
}

export default Component;
