import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srz1_-b8a.css';
import '../../css/l/ldngkacnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="srz1_-b8a"/><path clip-rule="evenodd" class="ldngkacnl"/></g>`,
		"fallback": "solar:plate-bold",
	});
}

export default Component;
