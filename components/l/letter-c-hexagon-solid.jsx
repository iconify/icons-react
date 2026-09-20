import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f38xf6bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f38xf6bxp"/>`,
		"fallback": "mynaui:letter-c-hexagon-solid",
	});
}

export default Component;
