import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtse6qx-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtse6qx-y"/>`,
		"fallback": "noviair-light:pie-chart-arrow-up",
	});
}

export default Component;
