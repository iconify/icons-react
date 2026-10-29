import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wjmw4zjys.css';
import '../../css/r/rlucojbsu.css';
import '../../css/j/j_kh__upk.css';
import '../../css/u/uh0pnrb4t.css';
import '../../css/w/wjck06tsq.css';
import '../../css/j/j4sw7l1ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wjmw4zjys wm-k"/><path class="rlucojbsu wm-a"/><path class="j_kh__upk wm-s"/><path class="uh0pnrb4t wm-k"/><path class="wjck06tsq wm-a"/><path class="j4sw7l1ua wm-s"/></g>`,
		"fallback": "withicons:lotus-sketch",
	});
}

export default Component;
