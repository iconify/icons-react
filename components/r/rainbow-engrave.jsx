import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sr8-7ybpu.css';
import '../../css/a/a88t_lbux.css';
import '../../css/r/r5b1awbki.css';
import '../../css/y/ydpucsi6v.css';
import '../../css/k/kgm9zh0zc.css';
import '../../css/w/wk7jmzmpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sr8-7ybpu wm-k"/><path class="a88t_lbux wm-a"/><path class="r5b1awbki wm-shadow"/><path class="wm-k ydpucsi6v"/><path class="kgm9zh0zc wm-k"/><path class="wk7jmzmpf wm-a"/></g>`,
		"fallback": "withicons:rainbow-engrave",
	});
}

export default Component;
