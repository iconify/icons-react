import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqdic25tv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqdic25tv"/>`,
		"fallback": "lsicon:search-outline",
	});
}

export default Component;
