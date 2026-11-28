import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-b6p1bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-b6p1bze"/>`,
		"fallback": "noviair:monitor-question",
	});
}

export default Component;
