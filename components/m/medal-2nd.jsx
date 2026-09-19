import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udrja85vn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udrja85vn"/>`,
		"fallback": "at-icons:medal-2nd",
	});
}

export default Component;
