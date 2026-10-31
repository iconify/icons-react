import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e5izgbcez.css';
import '../../css/k/kazu6jo1o.css';
import '../../css/b/bn-zn_law.css';
import '../../css/n/nbz7rolev.css';
import '../../css/u/up7w6abgp.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e5izgbcez wm-shadow"/><path class="kazu6jo1o"/><path class="bn-zn_law"/><path class="nbz7rolev"/><path class="up7w6abgp"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:video-off",
	});
}

export default Component;
