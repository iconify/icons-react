import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx1nhvb9c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx1nhvb9c"/>`,
		"fallback": "charm:tree-fir",
	});
}

export default Component;
