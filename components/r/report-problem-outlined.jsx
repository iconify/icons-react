import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvn9s80eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvn9s80eo"/>`,
		"fallback": "weui:report-problem-outlined",
	});
}

export default Component;
