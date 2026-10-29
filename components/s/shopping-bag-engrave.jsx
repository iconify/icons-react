import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a3_895q0x.css';
import '../../css/e/ep7-k5bqj.css';
import '../../css/s/sj75n8dmy.css';
import '../../css/d/dyo429x_t.css';
import '../../css/u/uhc76--hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a3_895q0x wm-k"/><path class="ep7-k5bqj wm-a"/><path class="sj75n8dmy wm-shadow"/><path class="dyo429x_t wm-k"/><path class="uhc76--hq wm-a"/></g>`,
		"fallback": "withicons:shopping-bag-engrave",
	});
}

export default Component;
