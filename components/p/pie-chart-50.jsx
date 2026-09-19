import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnwv1pbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnwv1pbqs"/>`,
		"fallback": "ci:pie-chart-50",
	});
}

export default Component;
