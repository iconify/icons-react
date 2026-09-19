import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm4lw1-pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm4lw1-pt"/>`,
		"fallback": "ci:pie-chart-outline-25",
	});
}

export default Component;
