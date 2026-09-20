import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha3hny2-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha3hny2-e"/>`,
		"fallback": "mynaui:letter-t-hexagon",
	});
}

export default Component;
