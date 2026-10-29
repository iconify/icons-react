import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/djiqt-b-p.css';
import '../../css/p/p5vicub1t.css';
import '../../css/g/gkf0wyr6p.css';
import '../../css/e/emha3wbqe.css';
import '../../css/f/f86q_5yiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="djiqt-b-p wm-k"/><path class="p5vicub1t wm-s"/><path class="gkf0wyr6p wm-shadow"/><path class="emha3wbqe wm-k"/><path class="f86q_5yiw wm-s"/></g>`,
		"fallback": "withicons:user-plus-engrave",
	});
}

export default Component;
