import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wtwg3sbok.css';
import '../../css/t/t__d2x5bb.css';
import '../../css/f/fo5ufdrcd.css';
import '../../css/h/h0rt94b4c.css';
import '../../css/y/y7p_whbrn.css';
import '../../css/p/pc9c28bgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wtwg3sbok"/><path class="t__d2x5bb wm-shadow"/><path class="fo5ufdrcd"/><path class="h0rt94b4c"/><path class="y7p_whbrn"/><path class="pc9c28bgu wm-s"/></g>`,
		"fallback": "withicons-brutal:users-plus",
	});
}

export default Component;
