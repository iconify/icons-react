import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0qvmi33m.css';
import '../../css/c/ctcoxd1qn.css';
import '../../css/m/mq1ot8b-j.css';
import '../../css/y/ywkb-_bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d0qvmi33m"/><path class="ctcoxd1qn"/><path class="mq1ot8b-j"/><path class="ywkb-_bki"/></g>`,
		"fallback": "solar:notification-lines-remove-outline",
	});
}

export default Component;
