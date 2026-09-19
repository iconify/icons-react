import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkk--mbrq.css';
import '../../css/p/p1d__o_kt.css';
import '../../css/e/emz8u50dq.css';
import '../../css/m/mue43obit.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkk--mbrq"/><path class="p1d__o_kt"/><circle class="emz8u50dq"/><ellipse transform="rotate(33.488 194.39 60.752)" class="mue43obit"/>`,
		"fallback": "fxemoji:roundpushpin",
	});
}

export default Component;
