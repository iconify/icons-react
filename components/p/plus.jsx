import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-1da1b2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-1da1b2l"/>`,
		"fallback": "charm:plus",
	});
}

export default Component;
