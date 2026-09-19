import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f_h_x_bua.css';
import '../../css/c/c9j4_hbrg.css';
import '../../css/p/p9l8-rlng.css';
import '../../css/z/zeggah3kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f_h_x_bua"/><path class="c9j4_hbrg"/><path class="p9l8-rlng"/><path class="zeggah3kn"/></g>`,
		"fallback": "iconoir:no-smoking-circled",
	});
}

export default Component;
