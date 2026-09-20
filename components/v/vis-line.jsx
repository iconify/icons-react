import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b23socbod.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b23socbod"/>`,
		"fallback": "oui:vis-line",
	});
}

export default Component;
