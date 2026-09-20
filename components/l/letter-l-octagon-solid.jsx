import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an3y2z25r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an3y2z25r"/>`,
		"fallback": "mynaui:letter-l-octagon-solid",
	});
}

export default Component;
