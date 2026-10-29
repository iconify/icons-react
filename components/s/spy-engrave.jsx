import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ykkz0pbsh.css';
import '../../css/l/l2d98wbon.css';
import '../../css/n/ne95cab0h.css';
import '../../css/z/z54ep9b9t.css';
import '../../css/j/j8sz6hb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k ykkz0pbsh"/><path class="l2d98wbon wm-a"/><path class="ne95cab0h wm-shadow"/><path class="wm-k z54ep9b9t"/><path class="j8sz6hb2h wm-a"/></g>`,
		"fallback": "withicons:spy-engrave",
	});
}

export default Component;
