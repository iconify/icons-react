import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l9vmhfb_s.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l9vmhfb_s"/><path class="r3yr01bjg wm-shadow"/><path class="xrfn3bcyz"/></g>`,
		"fallback": "withicons:shield-engrave",
	});
}

export default Component;
