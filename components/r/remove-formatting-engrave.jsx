import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zq1sn1yld.css';
import '../../css/i/i9sk41bib.css';
import '../../css/s/ss5svr9ob.css';
import '../../css/q/q3o42wsez.css';
import '../../css/v/vrvs2074r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zq1sn1yld"/><path class="i9sk41bib wm-s"/><path class="ss5svr9ob wm-shadow"/><path class="q3o42wsez wm-k"/><path class="vrvs2074r wm-s"/></g>`,
		"fallback": "withicons:remove-formatting-engrave",
	});
}

export default Component;
