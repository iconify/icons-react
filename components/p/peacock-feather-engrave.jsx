import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/io8m4wbmb.css';
import '../../css/w/wnnhtisks.css';
import '../../css/v/vm-ricb2b.css';
import '../../css/b/bk4iu5bny.css';
import '../../css/x/xumaidr2d.css';
import '../../css/m/mf_2bbcvn.css';
import '../../css/m/mis150gkc.css';
import '../../css/r/ro0wouoeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="io8m4wbmb wm-k"/><path class="wm-shadow wnnhtisks"/><path class="vm-ricb2b wm-k"/><path class="bk4iu5bny wm-k"/><path class="wm-k xumaidr2d"/><path class="mf_2bbcvn wm-a"/><path class="mis150gkc wm-a"/><circle class="ro0wouoeo wm-a"/></g>`,
		"fallback": "withicons:peacock-feather-engrave",
	});
}

export default Component;
