import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi6to1cst.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi6to1cst"/>`,
		"fallback": "oui:vis-metric",
	});
}

export default Component;
