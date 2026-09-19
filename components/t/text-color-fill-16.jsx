import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlr8r5bfe.css';
import '../../css/y/yt28hwmoe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlr8r5bfe"/><path class="yt28hwmoe"/>`,
		"fallback": "garden:text-color-fill-16",
	});
}

export default Component;
