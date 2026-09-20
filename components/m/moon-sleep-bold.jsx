import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qazllkbmt.css';
import '../../css/i/ind715bsx.css';
import '../../css/w/wh3ud5bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qazllkbmt"/><path class="ind715bsx"/><path class="wh3ud5bbq"/></g>`,
		"fallback": "solar:moon-sleep-bold",
	});
}

export default Component;
