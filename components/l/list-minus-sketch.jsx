import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yhi9251_i.css';
import '../../css/h/h83iirgtj.css';
import '../../css/n/n4lar3b0l.css';
import '../../css/m/myn9_tb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yhi9251_i"/><path class="h83iirgtj wm-s"/><path class="n4lar3b0l wm-k"/><path class="myn9_tb9s wm-s"/></g>`,
		"fallback": "withicons:list-minus-sketch",
	});
}

export default Component;
