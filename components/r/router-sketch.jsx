import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dzby_kbty.css';
import '../../css/f/f2v3xdrlx.css';
import '../../css/s/s2a91vbxp.css';
import '../../css/s/sds2cyb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dzby_kbty"/><path class="f2v3xdrlx wm-a"/><path class="s2a91vbxp wm-k"/><path class="sds2cyb9y wm-a"/></g>`,
		"fallback": "withicons:router-sketch",
	});
}

export default Component;
