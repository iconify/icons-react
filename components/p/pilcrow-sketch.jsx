import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w4_v3tb5k.css';
import '../../css/t/t5vfqvb6r.css';
import '../../css/c/cm3qj-lzz.css';
import '../../css/t/t1lo1jbjx.css';
import '../../css/d/doa5x-b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w4_v3tb5k"/><path class="t5vfqvb6r wm-k"/><path class="cm3qj-lzz wm-a"/><path class="t1lo1jbjx wm-k"/><path class="doa5x-b0h wm-a"/></g>`,
		"fallback": "withicons:pilcrow-sketch",
	});
}

export default Component;
