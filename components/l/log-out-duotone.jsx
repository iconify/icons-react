import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auuju9bme.css';
import '../../css/j/j9f3h74oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="auuju9bme secondary"/><path class="j9f3h74oi primary"/></g>`,
		"fallback": "iconaut:log-out-duotone",
	});
}

export default Component;
