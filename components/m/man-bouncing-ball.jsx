import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/g/gv2jg9b1e.css';
import '../../css/y/yuyqw092u.css';
import '../../css/z/zlnujl-lw.css';
import '../../css/t/tebh12zgf.css';
import '../../css/d/d-1bj9mxq.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/q/q9q3peckd.css';
import '../../css/c/ci8d5th1m.css';
import '../../css/a/actmj_koa.css';
import '../../css/h/hya7uwbqv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="gv2jg9b1e"/><path class="yuyqw092u"/><path class="zlnujl-lw"/><path class="tebh12zgf"/></g><circle class="d-1bj9mxq"/><g class="brzn_0bpr"><circle class="q9q3peckd"/><circle class="ci8d5th1m"/><path class="actmj_koa"/><path class="hya7uwbqv"/></g>`,
		"fallback": "openmoji:man-bouncing-ball",
	});
}

export default Component;
