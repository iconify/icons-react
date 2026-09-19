import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a996mlb1k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a996mlb1k"/>`,
		"fallback": "garden:plus-fill-16",
	});
}

export default Component;
