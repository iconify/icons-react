import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o4qq2hmsv.css';
import '../../css/r/re7id0y1c.css';
import '../../css/s/sx20ad8rv.css';
import '../../css/u/unn-0zbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o4qq2hmsv"/><path class="re7id0y1c wm-a"/><path class="sx20ad8rv wm-k"/><path class="unn-0zbjb wm-a"/></g>`,
		"fallback": "withicons:terminal-sketch",
	});
}

export default Component;
