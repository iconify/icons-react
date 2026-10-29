import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/srrfs-k_u.css';
import '../../css/r/rxu9rsydk.css';
import '../../css/l/ledkdvbfc.css';
import '../../css/x/xjk38nbdp.css';
import '../../css/u/u8djjoheg.css';
import '../../css/m/mqfx5dq5o.css';
import '../../css/w/w9pcj6b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="srrfs-k_u wm-k"/><path class="rxu9rsydk wm-a"/><path class="ledkdvbfc wm-s"/><path class="wm-shadow xjk38nbdp"/><path class="u8djjoheg wm-k"/><path class="mqfx5dq5o wm-a"/><path class="w9pcj6b5h wm-s"/></g>`,
		"fallback": "withicons:notebook-pen-engrave",
	});
}

export default Component;
