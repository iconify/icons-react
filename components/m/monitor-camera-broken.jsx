import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uz-6ybbfc.css';
import '../../css/p/p0mqq1_8c.css';
import '../../css/k/kva043bzk.css';
import '../../css/j/jt_thrbns.css';
import '../../css/k/kuvu9bc5l.css';
import '../../css/r/rainf0t7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uz-6ybbfc"/><path class="p0mqq1_8c"/><path class="kva043bzk"/><path class="jt_thrbns"/><path class="kuvu9bc5l"/><path class="rainf0t7w"/></g>`,
		"fallback": "solar:monitor-camera-broken",
	});
}

export default Component;
