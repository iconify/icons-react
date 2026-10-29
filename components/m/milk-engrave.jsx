import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uic09-b6z.css';
import '../../css/g/gdvhu285q.css';
import '../../css/l/l1pdc8-1w.css';
import '../../css/n/nhm3kcoqx.css';
import '../../css/o/ovzt3sbip.css';
import '../../css/w/w87_sfbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uic09-b6z wm-k"/><path class="gdvhu285q wm-a"/><path class="l1pdc8-1w wm-shadow"/><path class="nhm3kcoqx wm-k"/><path class="ovzt3sbip wm-k"/><path class="w87_sfbqc wm-a"/></g>`,
		"fallback": "withicons:milk-engrave",
	});
}

export default Component;
