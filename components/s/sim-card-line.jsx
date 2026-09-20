import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yghw7-75z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yghw7-75z"/>`,
		"fallback": "majesticons:sim-card-line",
	});
}

export default Component;
