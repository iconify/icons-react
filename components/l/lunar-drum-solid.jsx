import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c8j_n0b7j.css';
import '../../css/w/wepkbcchs.css';
import '../../css/r/rc36gxb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c8j_n0b7j"/><path class="wepkbcchs wm-a"/><path class="rc36gxb1s wm-s"/></g>`,
		"fallback": "withicons:lunar-drum-solid",
	});
}

export default Component;
