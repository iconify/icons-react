import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/stzn1tb6p.css';
import '../../css/u/u0jy2c12v.css';
import '../../css/n/n8guz-bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="stzn1tb6p"/><circle class="u0jy2c12v"/><path class="n8guz-bso"/></g>`,
		"fallback": "reicon:msg-bubble-user-filled",
	});
}

export default Component;
