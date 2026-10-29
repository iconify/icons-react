import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y3ujnnbol.css';
import '../../css/d/d18ai5beg.css';
import '../../css/o/ojr5lccvy.css';
import '../../css/u/urhp2vbzd.css';
import '../../css/w/wj3l2jslf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y3ujnnbol"/><path class="d18ai5beg wm-k"/><path class="ojr5lccvy wm-a"/><path class="urhp2vbzd wm-k"/><path class="wj3l2jslf wm-a"/></g>`,
		"fallback": "withicons:mandarin-orange-sketch",
	});
}

export default Component;
