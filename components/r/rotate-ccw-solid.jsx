import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqq-strpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqq-strpd"/>`,
		"fallback": "withicons:rotate-ccw-solid",
	});
}

export default Component;
