import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q0pnou38b.css';
import '../../css/w/wws34lbrr.css';
import '../../css/t/tloly4b5q.css';
import '../../css/q/qy5qlq-tp.css';
import '../../css/t/t9mbxobpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q0pnou38b"/><path class="wws34lbrr"/><path class="tloly4b5q"/><path class="qy5qlq-tp"/><path class="t9mbxobpm"/></g>`,
		"fallback": "solar:money-roll-linear",
	});
}

export default Component;
