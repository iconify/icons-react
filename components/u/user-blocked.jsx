import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6t2-l6zm.css';
import '../../css/u/u6mx54sdu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6t2-l6zm"/><path class="u6mx54sdu"/>`,
		"fallback": "ooui:user-blocked",
	});
}

export default Component;
