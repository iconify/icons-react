import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kysk_9b_v.css';
import '../../css/s/su-blz2fx.css';
import '../../css/i/iljndilhm.css';
import '../../css/p/pvzhv9xon.css';
import '../../css/j/j324vhxjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kysk_9b_v wm-shadow"/><path class="su-blz2fx"/><path class="iljndilhm"/><path class="pvzhv9xon"/><path class="j324vhxjl"/></g>`,
		"fallback": "withicons-retro:rolling-pin",
	});
}

export default Component;
