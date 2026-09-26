import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhpq4nbqp.css';
import '../../css/n/nhq5y_tpi.css';
import '../../css/s/s_qu5fbwl.css';
import '../../css/s/s9mcwnbry.css';
import '../../css/g/gjq4tncsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xhpq4nbqp"/><path class="nhq5y_tpi"/><path class="s_qu5fbwl"/><path class="s9mcwnbry"/><path class="gjq4tncsr"/></g>`,
		"fallback": "solar:smartphone-rotate-2-bold-duotone",
	});
}

export default Component;
