import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p5s_0zkai.css';
import '../../css/x/xxc5ztfqi.css';
import '../../css/m/m-qm78bhk.css';
import '../../css/s/sljtjcbnu.css';
import '../../css/b/buul2mbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p5s_0zkai"/><path class="wm-k xxc5ztfqi"/><path class="m-qm78bhk wm-k"/><path class="sljtjcbnu wm-a"/><path class="buul2mbps wm-a"/></g>`,
		"fallback": "withicons:mail-open-sketch",
	});
}

export default Component;
