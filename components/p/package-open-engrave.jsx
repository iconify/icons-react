import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k3guns27r.css';
import '../../css/y/y_9r-oqdn.css';
import '../../css/u/up7_xtq7l.css';
import '../../css/p/p0ewt213x.css';
import '../../css/j/jgkke34ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k3guns27r wm-k"/><path class="wm-a y_9r-oqdn"/><path class="up7_xtq7l wm-shadow"/><path class="p0ewt213x wm-k"/><path class="jgkke34ed wm-a"/></g>`,
		"fallback": "withicons:package-open-engrave",
	});
}

export default Component;
