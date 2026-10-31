import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k-b8wo--h.css';
import '../../css/l/l1h6ihblw.css';
import '../../css/j/jrk3qtbyt.css';
import '../../css/t/tz_h5sb2j.css';
import '../../css/i/ieotq0bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="k-b8wo--h wm-shadow"/><path class="l1h6ihblw wm-shadow"/><path class="jrk3qtbyt"/><path class="tz_h5sb2j"/><path class="ieotq0bpz"/></g>`,
		"fallback": "withicons-brutal:messages",
	});
}

export default Component;
