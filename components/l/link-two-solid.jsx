import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vu37duc_o.css';
import '../../css/q/qn4hbzhpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vu37duc_o"/><path class="qn4hbzhpq"/></g>`,
		"fallback": "mynaui:link-two-solid",
	});
}

export default Component;
