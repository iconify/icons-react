import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/settnrb1q.css';
import '../../css/g/gwdn4w5ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="settnrb1q"/><path class="gwdn4w5ku"/></g>`,
		"fallback": "solar:skip-next-bold",
	});
}

export default Component;
