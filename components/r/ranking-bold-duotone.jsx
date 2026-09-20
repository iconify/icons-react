import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sbmqfhzny.css';
import '../../css/i/iat6s90ft.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/sjb0kabnr.css';
import '../../css/e/ezby3sblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sbmqfhzny"/><path class="iat6s90ft"/><g class="mc2zb0bvp"><path class="sjb0kabnr"/><path class="ezby3sblm"/></g></g>`,
		"fallback": "solar:ranking-bold-duotone",
	});
}

export default Component;
