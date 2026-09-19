import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1v0u_7-q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1v0u_7-q"/>`,
		"fallback": "at-icons:lasso",
	});
}

export default Component;
