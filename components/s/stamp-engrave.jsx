import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hl22b3kff.css';
import '../../css/p/pcgr-jblj.css';
import '../../css/t/t7ek3-zxc.css';
import '../../css/p/pkeldoiqy.css';
import '../../css/z/zki1mvfag.css';
import '../../css/s/s_0goab_m.css';
import '../../css/j/jhmb2sbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hl22b3kff wm-k"/><path class="pcgr-jblj wm-a"/><path class="t7ek3-zxc wm-s"/><path class="pkeldoiqy wm-shadow"/><path class="wm-a zki1mvfag"/><path class="s_0goab_m wm-k"/><path class="jhmb2sbhi wm-s"/></g>`,
		"fallback": "withicons:stamp-engrave",
	});
}

export default Component;
