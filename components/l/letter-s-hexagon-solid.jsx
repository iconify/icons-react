import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haut6fkcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haut6fkcf"/>`,
		"fallback": "mynaui:letter-s-hexagon-solid",
	});
}

export default Component;
