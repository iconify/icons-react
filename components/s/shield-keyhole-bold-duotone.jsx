import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/am0-j8lcc.css';
import '../../css/t/tmngc7ddj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="am0-j8lcc"/><path class="tmngc7ddj"/></g>`,
		"fallback": "solar:shield-keyhole-bold-duotone",
	});
}

export default Component;
