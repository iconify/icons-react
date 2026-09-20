import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqy9krt7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqy9krt7r"/>`,
		"fallback": "solar:rewind-back-bold",
	});
}

export default Component;
