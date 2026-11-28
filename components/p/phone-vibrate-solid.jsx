import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkk4rbczc.css';
import '../../css/h/hhvfqmf3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkk4rbczc"/><path class="hhvfqmf3u"/></g>`,
		"fallback": "iconaut:phone-vibrate-solid",
	});
}

export default Component;
