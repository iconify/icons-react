import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k794_3g9h.css';
import '../../css/m/mmge36buo.css';
import '../../css/p/pxe5lrp9c.css';
import '../../css/n/ntu-3wbry.css';
import '../../css/v/vg3gqibcj.css';
import '../../css/h/hr7v-vbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k794_3g9h wm-k"/><path class="mmge36buo wm-a"/><path class="pxe5lrp9c wm-shadow"/><path class="ntu-3wbry wm-k"/><path class="vg3gqibcj wm-k"/><path class="hr7v-vbfi wm-a"/></g>`,
		"fallback": "withicons:timer-reset-engrave",
	});
}

export default Component;
