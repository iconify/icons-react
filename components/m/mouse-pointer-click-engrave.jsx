import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q46-m6bqn.css';
import '../../css/d/d4g911zof.css';
import '../../css/b/bjdi0cbkq.css';
import '../../css/t/tj2sxbbue.css';
import '../../css/z/zh570bf1g.css';
import '../../css/q/qjmhcfs4r.css';
import '../../css/u/u0_-tbopx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q46-m6bqn wm-k"/><path class="d4g911zof wm-a"/><path class="bjdi0cbkq wm-s"/><path class="tj2sxbbue wm-shadow"/><path class="wm-k zh570bf1g"/><path class="qjmhcfs4r wm-a"/><path class="u0_-tbopx wm-s"/></g>`,
		"fallback": "withicons:mouse-pointer-click-engrave",
	});
}

export default Component;
