import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h78-_kb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h78-_kb1q"/>`,
		"fallback": "ri:suitcase-fill",
	});
}

export default Component;
