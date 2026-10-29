import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/ql00m0bei.css';
import '../../css/y/ynleeubfu.css';
import '../../css/y/yitceubep.css';
import '../../css/f/fzyhonqct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ql00m0bei wm-k"/><path class="wm-a ynleeubfu"/><path class="wm-k yitceubep"/><path class="fzyhonqct wm-a"/></g>`,
		"fallback": "withicons:rotate-ccw-sketch",
	});
}

export default Component;
