import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uk0viebcn.css';
import '../../css/q/qwoa4ibhw.css';
import '../../css/y/y3_5exb-s.css';
import '../../css/i/ih32s4bkl.css';
import '../../css/v/v1kfzlb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uk0viebcn wm-k"/><path class="qwoa4ibhw wm-a"/><path class="wm-shadow y3_5exb-s"/><path class="ih32s4bkl wm-k"/><path class="v1kfzlb7a wm-a"/></g>`,
		"fallback": "withicons:link-engrave",
	});
}

export default Component;
