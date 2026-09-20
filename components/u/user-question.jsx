import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zbuvtybbw.css';
import '../../css/u/ugs4mpvqv.css';
import '../../css/r/rlnny_b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zbuvtybbw"/><path class="ugs4mpvqv"/><path class="rlnny_b_u"/></g>`,
		"fallback": "streamline-ultimate:user-question",
	});
}

export default Component;
