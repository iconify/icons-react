import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sul672bkd.css';
import '../../css/e/eeypgqbjc.css';
import '../../css/d/dqwry0bep.css';
import '../../css/m/me_u55doq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sul672bkd"/><path class="eeypgqbjc wm-a"/><path class="dqwry0bep wm-k"/><path class="me_u55doq wm-a"/></g>`,
		"fallback": "withicons:passport-sketch",
	});
}

export default Component;
