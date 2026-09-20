import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yna26d0th.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yna26d0th"/>`,
		"fallback": "oui:nav-overview",
	});
}

export default Component;
