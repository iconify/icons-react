import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mj_rm2b7f.css';
import '../../css/i/ig50ogbco.css';
import '../../css/m/m9ebv6big.css';
import '../../css/v/v7jzlzbxs.css';
import '../../css/u/u3s_svo7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mj_rm2b7f wm-k"/><path class="ig50ogbco wm-shadow"/><path class="m9ebv6big wm-k"/><path class="v7jzlzbxs wm-a"/><path class="u3s_svo7g wm-k"/></g>`,
		"fallback": "withicons:key-round-engrave",
	});
}

export default Component;
