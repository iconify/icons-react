import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ar6plbklz.css';
import '../../css/t/tb121gpsz.css';
import '../../css/l/lt7_g7bom.css';
import '../../css/y/yncubmr0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ar6plbklz wm-k"/><path class="tb121gpsz wm-a"/><path class="lt7_g7bom wm-k"/><path class="wm-a yncubmr0l"/></g>`,
		"fallback": "withicons:scale-sketch",
	});
}

export default Component;
