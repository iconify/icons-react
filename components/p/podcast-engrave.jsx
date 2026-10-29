import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uozepsbwm.css';
import '../../css/b/bzgpdedgn.css';
import '../../css/m/mkksdkbda.css';
import '../../css/o/o9x0zt3az.css';
import '../../css/s/ssbvo1ywn.css';
import '../../css/k/k03jbobmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uozepsbwm wm-k"/><path class="bzgpdedgn wm-a"/><path class="mkksdkbda wm-shadow"/><path class="o9x0zt3az wm-k"/><path class="ssbvo1ywn wm-a"/><path class="k03jbobmk wm-a"/></g>`,
		"fallback": "withicons:podcast-engrave",
	});
}

export default Component;
