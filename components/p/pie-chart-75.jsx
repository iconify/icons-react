import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twdnls6-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twdnls6-i"/>`,
		"fallback": "ci:pie-chart-75",
	});
}

export default Component;
