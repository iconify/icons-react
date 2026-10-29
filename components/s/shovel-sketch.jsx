import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nsi8if9vq.css';
import '../../css/t/t1xreqb-l.css';
import '../../css/l/l31wd34jz.css';
import '../../css/s/sd3hx-buh.css';
import '../../css/i/i37y9wb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nsi8if9vq"/><path class="t1xreqb-l wm-k"/><path class="l31wd34jz wm-a"/><path class="sd3hx-buh wm-k"/><path class="i37y9wb6u wm-a"/></g>`,
		"fallback": "withicons:shovel-sketch",
	});
}

export default Component;
