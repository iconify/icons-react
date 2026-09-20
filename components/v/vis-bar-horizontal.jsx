import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jli5rnb2m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jli5rnb2m"/>`,
		"fallback": "oui:vis-bar-horizontal",
	});
}

export default Component;
