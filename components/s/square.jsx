import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apoqu8bds.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apoqu8bds"/>`,
		"fallback": "at-icons:square",
	});
}

export default Component;
