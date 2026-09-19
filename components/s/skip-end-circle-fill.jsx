import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjeuv2d3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjeuv2d3b"/>`,
		"fallback": "bi:skip-end-circle-fill",
	});
}

export default Component;
