import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3s0_eb_b.css';
import '../../css/w/waaci6bhq.css';
import '../../css/z/z9idlac5c.css';
import '../../css/y/y7wysxb7v.css';
import '../../css/u/uvi-asboq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3s0_eb_b"/><path class="waaci6bhq"/><path class="z9idlac5c"/><path class="y7wysxb7v"/><path class="uvi-asboq"/>`,
		"fallback": "fxemoji:melon",
	});
}

export default Component;
