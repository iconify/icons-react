import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgt2jkb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgt2jkb1r"/>`,
		"fallback": "mingcute:mic-line",
	});
}

export default Component;
