import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzkjo4q4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzkjo4q4q"/>`,
		"fallback": "mdi:opera",
	});
}

export default Component;
