import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4w7b1byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4w7b1byo"/>`,
		"fallback": "mynaui:letter-t-hexagon-solid",
	});
}

export default Component;
