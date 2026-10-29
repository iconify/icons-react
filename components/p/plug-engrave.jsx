import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cn1x6iioy.css';
import '../../css/r/rou8wpb_j.css';
import '../../css/r/rhxxk9bkj.css';
import '../../css/b/bt--9eb0w.css';
import '../../css/h/hqgq3dbge.css';
import '../../css/h/hpi0ccblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cn1x6iioy wm-k"/><path class="rou8wpb_j wm-a"/><path class="rhxxk9bkj wm-shadow"/><path class="bt--9eb0w wm-a"/><path class="hqgq3dbge wm-k"/><path class="hpi0ccblh wm-a"/></g>`,
		"fallback": "withicons:plug-engrave",
	});
}

export default Component;
