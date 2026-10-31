import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/amzs2vygw.css';
import '../../css/f/fgl7d3b2i.css';
import '../../css/q/qj2ybmbte.css';
import '../../css/u/uqwdcjxkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="amzs2vygw wm-shadow"/><path class="fgl7d3b2i wm-shadow"/><path class="qj2ybmbte"/><path class="uqwdcjxkk"/></g>`,
		"fallback": "withicons-brutal:voicemail",
	});
}

export default Component;
