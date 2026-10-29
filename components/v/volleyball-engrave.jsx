import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ktuhxv9th.css';
import '../../css/l/l9bj8-b_u.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/n/nvd001kpk.css';
import '../../css/e/esx_dabgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ktuhxv9th wm-k"/><path class="l9bj8-b_u wm-a"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="nvd001kpk wm-a"/><path class="esx_dabgb wm-a"/></g>`,
		"fallback": "withicons:volleyball-engrave",
	});
}

export default Component;
