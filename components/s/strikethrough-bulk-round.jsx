import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sn-kq-mjg.css';
import '../../css/m/mv6f7uqql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sn-kq-mjg"/><path class="mv6f7uqql"/></g>`,
		"fallback": "coolicons:strikethrough-bulk-round",
	});
}

export default Component;
