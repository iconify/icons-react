import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9zq1s6gj.css';
import '../../css/c/cdnwn14ow.css';
import '../../css/s/srkqqr_4x.css';
import '../../css/q/qkxxl0bgg.css';
import '../../css/k/kw601mbyb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9zq1s6gj"/><path class="cdnwn14ow"/><path class="srkqqr_4x"/><path class="qkxxl0bgg"/><path class="kw601mbyb"/></g>`,
		"fallback": "unjs:magicast",
	});
}

export default Component;
