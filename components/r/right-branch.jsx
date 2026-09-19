import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5oj9bbnl.css';
import '../../css/w/wn9vp_q7p.css';
import '../../css/h/hpifqdbin.css';
import '../../css/k/kkkqdqbde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5oj9bbnl"/><path class="wn9vp_q7p"/><circle class="hpifqdbin"/><path class="kkkqdqbde"/></g>`,
		"fallback": "icon-park-outline:right-branch",
	});
}

export default Component;
