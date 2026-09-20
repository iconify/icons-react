import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/w/w8-fl7qwf.css';
import '../../css/k/k2ka4kbmw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yi-iv-bfc.css';
import '../../css/n/nzc_ikb8j.css';
import '../../css/c/cxt8gxr6l.css';
import '../../css/m/mg29pp27j.css';
import '../../css/t/t8lwd3bcd.css';
import '../../css/w/ww59pgjch.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="w8-fl7qwf"/><path class="k2ka4kbmw"/></g><g class="brzn_0bpr"><circle class="yi-iv-bfc"/><circle class="nzc_ikb8j"/><path class="cxt8gxr6l"/><circle class="mg29pp27j"/><path class="t8lwd3bcd"/><path class="ww59pgjch"/></g>`,
		"fallback": "openmoji:man-biking",
	});
}

export default Component;
