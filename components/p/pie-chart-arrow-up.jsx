import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_edzg9_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_edzg9_j"/>`,
		"fallback": "noviair:pie-chart-arrow-up",
	});
}

export default Component;
