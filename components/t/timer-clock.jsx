import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce64vt83q.css';
import '../../css/z/zh-570uxn.css';
import '../../css/p/pelgp0x_u.css';
import '../../css/v/vjopy_4gr.css';
import '../../css/d/dngygcc6w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ce64vt83q"/><path class="zh-570uxn"/><path class="pelgp0x_u"/><path class="vjopy_4gr"/><path class="dngygcc6w"/></g>`,
		"fallback": "fluent-emoji-flat:timer-clock",
	});
}

export default Component;
