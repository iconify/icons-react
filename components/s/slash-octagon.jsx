import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq7b6qb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq7b6qb_e"/>`,
		"fallback": "mynaui:slash-octagon",
	});
}

export default Component;
