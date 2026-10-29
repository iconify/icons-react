import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d1883fb6h.css';
import '../../css/y/yniokbc4v.css';
import '../../css/p/p05jtukau.css';
import '../../css/t/t9g5kvbye.css';
import '../../css/t/trdla8jeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d1883fb6h wm-k"/><path class="wm-a yniokbc4v"/><path class="p05jtukau wm-shadow"/><path class="t9g5kvbye wm-k"/><path class="trdla8jeo wm-a"/></g>`,
		"fallback": "withicons:layout-list-engrave",
	});
}

export default Component;
