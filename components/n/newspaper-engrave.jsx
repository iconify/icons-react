import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y7lwahbyc.css';
import '../../css/q/qynj9glqj.css';
import '../../css/b/b55os-lyu.css';
import '../../css/b/bkk0xnbka.css';
import '../../css/l/l4ok05b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k y7lwahbyc"/><path class="qynj9glqj wm-shadow"/><path class="b55os-lyu wm-k"/><path class="bkk0xnbka wm-k"/><path class="l4ok05b1o wm-a"/></g>`,
		"fallback": "withicons:newspaper-engrave",
	});
}

export default Component;
