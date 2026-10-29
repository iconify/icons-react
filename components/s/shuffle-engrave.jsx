import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/ht_8w2igq.css';
import '../../css/f/fvd2_cciw.css';
import '../../css/v/vwlpmvbuf.css';
import '../../css/k/kfg0anbux.css';
import '../../css/x/x0wfh-5ox.css';
import '../../css/l/l0_8r-6fb.css';
import '../../css/y/yakhjr-at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ht_8w2igq wm-k"/><path class="fvd2_cciw wm-a"/><path class="vwlpmvbuf wm-shadow"/><path class="kfg0anbux wm-k"/><path class="wm-a x0wfh-5ox"/><path class="l0_8r-6fb wm-k"/><path class="wm-a yakhjr-at"/></g>`,
		"fallback": "withicons:shuffle-engrave",
	});
}

export default Component;
