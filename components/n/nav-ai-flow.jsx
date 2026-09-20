import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7rvl6bbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7rvl6bbj"/>`,
		"fallback": "oui:nav-ai-flow",
	});
}

export default Component;
