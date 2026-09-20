import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pna-dobsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pna-dobsi"/>`,
		"fallback": "mynaui:line-chart-square-solid",
	});
}

export default Component;
