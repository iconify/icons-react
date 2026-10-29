import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6jp3jbsz.css';
import '../../css/z/zclo0mbka.css';
import '../../css/y/y2k4rub5q.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/x/xnnn3ac7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f6jp3jbsz wm-k"/><path class="wm-a zclo0mbka"/><path class="wm-shadow y2k4rub5q"/><path class="st-oxhb_e wm-k"/><path class="wm-a xnnn3ac7j"/></g>`,
		"fallback": "withicons:volume-engrave",
	});
}

export default Component;
