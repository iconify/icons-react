import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e841m2env.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e841m2env"/>`,
		"fallback": "mynaui:snow-solid",
	});
}

export default Component;
