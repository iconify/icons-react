import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hc3341b_i.css';
import '../../css/n/nmcr65isa.css';
import '../../css/s/sv9gucnbt.css';
import '../../css/v/vh1b5unvh.css';
import '../../css/z/z6enqggrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hc3341b_i wm-k"/><path class="nmcr65isa wm-a"/><path class="sv9gucnbt wm-shadow"/><path class="vh1b5unvh wm-k"/><path class="wm-a z6enqggrv"/></g>`,
		"fallback": "withicons:person-running-engrave",
	});
}

export default Component;
