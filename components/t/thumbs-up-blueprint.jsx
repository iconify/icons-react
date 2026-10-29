import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hbyi_obok.css';
import '../../css/b/b6acjm45t.css';
import '../../css/f/f6_0b0b7v.css';
import '../../css/m/mq3osobty.css';
import '../../css/n/nej6xhpny.css';
import '../../css/d/dp_gv7bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hbyi_obok wm-deco"/><path class="b6acjm45t wm-deco"/><path class="f6_0b0b7v wm-deco"/><path class="mq3osobty wm-k"/><path class="nej6xhpny wm-a"/><path class="dp_gv7bnq wm-k"/></g>`,
		"fallback": "withicons:thumbs-up-blueprint",
	});
}

export default Component;
