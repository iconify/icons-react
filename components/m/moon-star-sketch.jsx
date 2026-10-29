import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pcrb767dm.css';
import '../../css/o/ofbe2g9yf.css';
import '../../css/k/k25u9dy7m.css';
import '../../css/s/s42c10bcn.css';
import '../../css/w/wpyzi_bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pcrb767dm"/><path class="ofbe2g9yf wm-k"/><path class="k25u9dy7m wm-s"/><path class="s42c10bcn wm-k"/><path class="wm-s wpyzi_bol"/></g>`,
		"fallback": "withicons:moon-star-sketch",
	});
}

export default Component;
