import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgu8e5b0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgu8e5b0m"/>`,
		"fallback": "oui:magnify-with-plus",
	});
}

export default Component;
