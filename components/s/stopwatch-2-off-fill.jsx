import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uly40t6jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uly40t6jt"/>`,
		"fallback": "mingcute:stopwatch-2-off-fill",
	});
}

export default Component;
