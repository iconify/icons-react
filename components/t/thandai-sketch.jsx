import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qjmpe7bid.css';
import '../../css/b/bqshieblu.css';
import '../../css/p/ps4pgr5fz.css';
import '../../css/l/lyqjd8esz.css';
import '../../css/c/cjnnpprvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qjmpe7bid"/><path class="bqshieblu wm-k"/><path class="ps4pgr5fz wm-a"/><path class="lyqjd8esz wm-k"/><path class="cjnnpprvw wm-a"/></g>`,
		"fallback": "withicons:thandai-sketch",
	});
}

export default Component;
