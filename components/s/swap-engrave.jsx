import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/axctq6bkz.css';
import '../../css/h/hui8iubvv.css';
import '../../css/z/zqvy67bxh.css';
import '../../css/l/louzr2q0b.css';
import '../../css/w/wox8e5-la.css';
import '../../css/i/iqev0abij.css';
import '../../css/n/nl8tjs5bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="axctq6bkz wm-k"/><path class="hui8iubvv wm-a"/><path class="wm-shadow zqvy67bxh"/><path class="louzr2q0b wm-k"/><path class="wm-a wox8e5-la"/><path class="iqev0abij wm-k"/><path class="nl8tjs5bg wm-a"/></g>`,
		"fallback": "withicons:swap-engrave",
	});
}

export default Component;
