import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l46--2agk.css';
import '../../css/c/cpkugg5ma.css';
import '../../css/t/t1ijvbdyl.css';
import '../../css/b/buxga7syi.css';
import '../../css/z/zm38tmb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l46--2agk"/><path class="cpkugg5ma"/><path class="t1ijvbdyl wm-shine"/><path class="buxga7syi wm-k"/><path class="wm-a zm38tmb2p"/></g>`,
		"fallback": "withicons-kawaii:passport",
	});
}

export default Component;
