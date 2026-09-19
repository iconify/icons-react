import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/w/wh_e63bgt.css';
import '../../css/a/aq-6djbkr.css';
import '../../css/y/y3x6evbzl.css';
import '../../css/o/o-8k7sqon.css';
import '../../css/k/k4lw4ac-t.css';
import '../../css/y/yd_hm0zuc.css';
import '../../css/j/j5cb9ybdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="wh_e63bgt"/><path clip-rule="evenodd" class="aq-6djbkr"/><path clip-rule="evenodd" class="y3x6evbzl"/><path class="o-8k7sqon"/><path clip-rule="evenodd" class="k4lw4ac-t"/></g><path clip-rule="evenodd" class="yd_hm0zuc"/><path clip-rule="evenodd" class="j5cb9ybdt"/></g>`,
		"fallback": "pepicons:monitor-loop-print",
	});
}

export default Component;
