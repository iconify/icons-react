import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yc0obxb_k.css';
import '../../css/d/dp_o11dny.css';
import '../../css/b/b6kx-7ubi.css';
import '../../css/o/oqz357xqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yc0obxb_k"/><path class="dp_o11dny"/><path class="b6kx-7ubi"/><path class="oqz357xqz"/></g>`,
		"fallback": "streamline-ultimate:office-shredder-1",
	});
}

export default Component;
