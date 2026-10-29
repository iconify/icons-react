import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/h/hx2mzrprj.css';
import '../../css/f/fo3gdfn_q.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/x/x2ocqx88i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="hx2mzrprj wm-s"/><path class="fo3gdfn_q wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="wm-s x2ocqx88i"/></g>`,
		"fallback": "withicons:user-star-engrave",
	});
}

export default Component;
