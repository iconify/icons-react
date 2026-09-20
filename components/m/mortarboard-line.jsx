import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db7_4kbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db7_4kbiv"/>`,
		"fallback": "mingcute:mortarboard-line",
	});
}

export default Component;
