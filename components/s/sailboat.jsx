import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bqqubi45u.css';
import '../../css/p/p5qtbsb9t.css';
import '../../css/y/yh5j-urgz.css';
import '../../css/p/pengmob8k.css';
import '../../css/w/w0h07xbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bqqubi45u wm-shadow"/><path class="p5qtbsb9t"/><path class="yh5j-urgz"/><path class="pengmob8k"/><path class="w0h07xbqf"/></g>`,
		"fallback": "withicons-retro:sailboat",
	});
}

export default Component;
