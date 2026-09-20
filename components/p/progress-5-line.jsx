import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccw2tfb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccw2tfb4v"/>`,
		"fallback": "ri:progress-5-line",
	});
}

export default Component;
