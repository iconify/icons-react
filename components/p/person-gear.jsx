import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npykxrbiu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npykxrbiu"/>`,
		"fallback": "bi:person-gear",
	});
}

export default Component;
