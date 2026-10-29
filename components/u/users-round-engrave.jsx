import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sirq2-j2p.css';
import '../../css/z/z4paenj8z.css';
import '../../css/l/lhlq9zetp.css';
import '../../css/t/t_g_x1biv.css';
import '../../css/c/c-t_59bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sirq2-j2p wm-k"/><path class="wm-a z4paenj8z"/><path class="lhlq9zetp wm-shadow"/><path class="t_g_x1biv wm-k"/><path class="c-t_59bnx wm-a"/></g>`,
		"fallback": "withicons:users-round-engrave",
	});
}

export default Component;
