import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccj1-zbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccj1-zbif"/>`,
		"fallback": "ri:pie-chart-box-line",
	});
}

export default Component;
