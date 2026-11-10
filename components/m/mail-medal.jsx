import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfkufcbrf.css';
import '../../css/n/n7db0f67r.css';
import '../../css/v/vr4-bqacv.css';
import '../../css/h/h7c6wsb2u.css';
import '../../css/b/b8wb441cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hfkufcbrf"/><path class="n7db0f67r"/><path class="vr4-bqacv"/><path class="h7c6wsb2u"/><path class="b8wb441cx"/></g>`,
		"fallback": "andrsrxn:mail-medal",
	});
}

export default Component;
