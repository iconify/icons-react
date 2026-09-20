import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7vt33bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7vt33bta"/>`,
		"fallback": "ri:speed-mini-fill",
	});
}

export default Component;
