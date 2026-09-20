import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg4agoyds.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg4agoyds"/>`,
		"fallback": "oui:vis-pie",
	});
}

export default Component;
