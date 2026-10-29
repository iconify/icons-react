import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u14zawbne.css';
import '../../css/r/rw-ct3bfq.css';
import '../../css/k/kidl1_b4u.css';
import '../../css/y/yl7a92tqe.css';
import '../../css/o/okp7pp4nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u14zawbne wm-k"/><path class="rw-ct3bfq wm-s"/><path class="kidl1_b4u wm-shadow"/><path class="wm-k yl7a92tqe"/><path class="okp7pp4nk wm-s"/></g>`,
		"fallback": "withicons:list-minus-engrave",
	});
}

export default Component;
