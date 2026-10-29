import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ex2o_-t6b.css';
import '../../css/u/u1azafbba.css';
import '../../css/h/hxppdibgb.css';
import '../../css/o/oapjrnbtk.css';
import '../../css/s/sn3o9xbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ex2o_-t6b"/><path class="u1azafbba wm-k"/><path class="hxppdibgb wm-a"/><path class="oapjrnbtk wm-k"/><path class="sn3o9xbjr wm-a"/></g>`,
		"fallback": "withicons:newspaper-sketch",
	});
}

export default Component;
