import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/x/x9_21w3fw.css';
import '../../css/k/kk-764bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="x9_21w3fw"/><path class="kk-764bgz"/></g>`,
		"fallback": "iconamoon:trend-up-bold",
	});
}

export default Component;
