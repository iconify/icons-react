import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty2v0klct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty2v0klct"/>`,
		"fallback": "mynaui:location-check-solid",
	});
}

export default Component;
