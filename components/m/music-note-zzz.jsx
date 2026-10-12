import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vp73le0rq.css';
import '../../css/w/whu1r2b_l.css';
import '../../css/o/owothiwds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vp73le0rq"/><path class="whu1r2b_l"/><path class="owothiwds"/></g>`,
		"fallback": "andrsrxn:music-note-zzz",
	});
}

export default Component;
