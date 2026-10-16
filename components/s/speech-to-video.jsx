import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcwnokb_q.css';
import '../../css/l/ll8yvqbbm.css';
import '../../css/f/fl0xqlm0u.css';
import '../../css/b/bhvl96d3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vcwnokb_q"/><path clip-rule="evenodd" class="ll8yvqbbm"/><path class="fl0xqlm0u"/><path class="bhvl96d3u"/></g>`,
		"fallback": "andrsrxn:speech-to-video",
	});
}

export default Component;
