import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glp9_tbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glp9_tbpp"/>`,
		"fallback": "hugeicons:timeline-event",
	});
}

export default Component;
