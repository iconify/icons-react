import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jhpoz2d-t.css';
import '../../css/e/ep698ubgt.css';
import '../../css/d/dt0487mof.css';
import '../../css/w/wkrks_5kf.css';
import '../../css/f/fcd11vhvw.css';
import '../../css/n/n206g-b_y.css';
import '../../css/c/cklk7kh8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jhpoz2d-t"/><path class="ep698ubgt wm-k"/><path class="dt0487mof wm-a"/><path class="wkrks_5kf wm-s"/><path class="fcd11vhvw wm-k"/><path class="n206g-b_y wm-a"/><path class="cklk7kh8o wm-s"/></g>`,
		"fallback": "withicons:stamp-sketch",
	});
}

export default Component;
