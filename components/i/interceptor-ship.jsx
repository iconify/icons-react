import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e82dw-bbr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e82dw-bbr"/>`,
		"fallback": "game-icons:interceptor-ship",
	});
}

export default Component;
