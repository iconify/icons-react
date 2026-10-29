import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c5k4p28-v.css';
import '../../css/q/q4_rucxmo.css';
import '../../css/q/q4jh7bv5z.css';
import '../../css/i/il_myibjf.css';
import '../../css/q/qygck_omr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c5k4p28-v wm-k"/><path class="q4_rucxmo wm-a"/><path class="q4jh7bv5z wm-shadow"/><path class="il_myibjf wm-k"/><path class="qygck_omr wm-a"/></g>`,
		"fallback": "withicons:screwdriver-engrave",
	});
}

export default Component;
