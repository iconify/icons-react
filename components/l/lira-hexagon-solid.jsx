import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4e90qb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4e90qb1n"/>`,
		"fallback": "mynaui:lira-hexagon-solid",
	});
}

export default Component;
