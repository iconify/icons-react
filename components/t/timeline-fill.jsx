import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4jlq40qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4jlq40qb"/>`,
		"fallback": "mingcute:timeline-fill",
	});
}

export default Component;
