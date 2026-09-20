import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/st9wqpxoy.css';
import '../../css/a/afwe0cb7c.css';
import '../../css/n/nl4g2jbjn.css';
import '../../css/a/asu_8f8hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="st9wqpxoy"/><path class="afwe0cb7c"/><path class="nl4g2jbjn"/><path class="asu_8f8hx"/></g>`,
		"fallback": "solar:smart-home-angle-bold",
	});
}

export default Component;
